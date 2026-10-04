import { NextRequest, NextResponse } from 'next/server';
import { contactSchema, telegramText } from '@/lib/contact';
// Best-effort, per-process limiter. Deploy behind a trusted proxy with edge rate limits
// for protection shared across instances; this map is not a distributed limiter.
const attempts = new Map<string, { count: number; reset: number }>();
export async function POST(request: NextRequest) {
 const now=Date.now();
 for(const [key,value] of attempts) if(value.reset<=now) attempts.delete(key);
 const key=(request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown').slice(0,100);
 const record=attempts.get(key) || {count:0,reset:now+60000};
 if(record.count>=5) { const retryAfter=Math.ceil((record.reset-now)/1000); return NextResponse.json({error:'Too many requests. Please try again shortly.',retryAfter},{status:429,headers:{'Retry-After':String(retryAfter)}}); }
 if(attempts.size>=10000 && !attempts.has(key)) return NextResponse.json({error:'Please try again shortly.'},{status:503});
 record.count++; attempts.set(key,record);
 let body: unknown;
 try { const raw=await request.text(); if(raw.length>8192) return NextResponse.json({error:'Message is too large.'},{status:413}); body=JSON.parse(raw); }
 catch { return NextResponse.json({error:'Invalid JSON.'},{status:400}); }
 const parsed=contactSchema.safeParse(body);
 if(!parsed.success) return NextResponse.json({error:'Please check the form fields.',fields:parsed.error.flatten().fieldErrors},{status:400});
 const token=process.env.TELEGRAM_BOT_TOKEN,chatId=process.env.TELEGRAM_CHAT_ID;
 if(!token||!chatId) return NextResponse.json({error:'Contact delivery is unavailable. Please use the email link.'},{status:503});
 try {
  const response=await fetch(`https://api.telegram.org/bot${token}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:chatId,text:telegramText(parsed.data)}),signal:AbortSignal.timeout(10000)});
  const result=await response.json();
  if(!response.ok || result.ok!==true) throw new Error('Delivery failed');
  return NextResponse.json({success:true});
 } catch { return NextResponse.json({error:'Message delivery failed. Please retry or use the email link.'},{status:502}); }
}
export async function GET() { return NextResponse.json({error:'Method not allowed'},{status:405,headers:{Allow:'POST'}}); }
