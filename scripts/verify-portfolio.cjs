/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness for transpiling and testing TS modules without a new runner. */
﻿const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const cache = new Map();
function load(file) {
 file=path.resolve(root,file); if(cache.has(file))return cache.get(file);
 const exports={};cache.set(file,exports);
 const output=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022}}).outputText;
 const localRequire=(name)=> {
  if(name.startsWith('@/components/technologies/'))return {default:()=>null};
  if(name.startsWith('@/')) {const base=path.join(root,name.slice(2));return load(fs.existsSync(base+'.ts')?base+'.ts':base+'.tsx');}
  return require(name);
 };
 vm.runInThisContext('(function(require,exports){'+output+'\n})',{filename:file})(localRequire,exports);
 return exports;
}
function entries(source) {
 const sf=ts.createSourceFile('Projects.tsx',source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 const array=sf.statements.find(ts.isVariableStatement).declarationList.declarations[0].initializer;
 return new Map(array.elements.map(obj=>[obj.properties.find(p=>p.name?.getText(sf)==='title' || p.name?.getText(sf)==='"title"').initializer.text,obj.getText(sf).replace(/\r\n/g,'\n')]));
}
async function run() {
 const current=fs.readFileSync(path.join(root,'config/Projects.tsx'),'utf8');
 const before=execFileSync('git',['-c',`safe.directory=${root.replace(/\\/g,'/')}`,'show','HEAD:config/Projects.tsx'],{cwd:root,encoding:'utf8'});
 // These legacy case studies retain their text; only the requested AI covers changed.
 for(const [name,slug] of [['Game Admin Portal','game-admin-portal'],['Getways','getways']]) {
  const entry=entries(current).get(name);
  assert.ok(entry.includes(`image: "/project/${slug}-ai.webp"`),name+' must use its new AI cover');
  const normalizeCover=source=>source.replace(`image: "/project/${slug}-ai.webp"`,`image: "/project/${slug}.png"`);
  assert.equal(normalizeCover(entry),normalizeCover(entries(before).get(name)),name+' case-study content must remain unchanged');
 }
 const {projects}=load('config/Projects.tsx');
 const {getPublishedProjects,getCuratedProjects,getProjectNavigation,getProjectBySlug}=load('lib/projects.ts');
 assert.equal(projects.length,11);assert.equal(new Set(projects.map(p=>p.projectDetailsPageSlug)).size,projects.length);
 assert.deepEqual(getCuratedProjects().map(p=>p.title),['Rentra','CineVault','Total Liquor','AOG']);
 assert.equal(projects.find(p=>p.title==='Runner Spikes').ownership,'freelance');assert.equal(projects.find(p=>p.title==='DineFlow').ownership,'personal');
 for(const p of getPublishedProjects()) {assert.ok(['completed','in-progress','archived'].includes(p.status));assert.ok(p.content?.length);assert.ok(fs.existsSync(path.join(root,'public',p.image)));for(const image of p.gallery||[])assert.ok(fs.existsSync(path.join(root,'public',image.src)));}
 for (const p of projects.filter(p => !['Game Admin Portal','Getways'].includes(p.title))) {
  assert.ok(p.content.length >= 10, p.title + ' must retain a detailed case study');
  assert.ok(p.content.some(b => b.type === 'features'), p.title + ' must include feature details');
  assert.ok(p.content.some(b => b.type === 'heading' && b.text === 'Technical Implementation'), p.title + ' must include implementation details');
  assert.ok(p.challenges?.length > 0 && p.learnings?.length > 0, p.title + ' must retain challenges and learnings');
  for (const image of p.gallery || []) assert.ok(!image.caption.includes(' ? '), 'Gallery captions must not contain corrupted punctuation');
 }
 const aboutSource = fs.readFileSync(path.join(root,'components/landing/About.tsx'),'utf8');
 assert.ok(!aboutSource.includes(' ? '), 'Skills must not contain corrupted separators');
 assert.ok(aboutSource.includes('<li key={skill}'), 'Skills must render as individual labels');
 assert.deepEqual(await getProjectNavigation('missing'),{previous:null,next:null});assert.equal(await getProjectBySlug('missing'),undefined);
 const {contactSchema,telegramText}=load('lib/contact.ts');
 const valid={name:'Test Person',email:'test@example.com',message:'Test [message] _with_ markup * and `code`.'};
 assert.ok(contactSchema.safeParse(valid).success);assert.ok(contactSchema.safeParse({...valid,phone:'+91 98765 43210'}).success);assert.equal(contactSchema.safeParse({...valid,phone:'invalid'}).success,false);assert.equal(contactSchema.safeParse({...valid,name:'  '}).success,false);
 assert.ok(telegramText(valid).includes(valid.message));
 const {NextRequest}=require('next/server');const {POST}=load('app/api/contact/route.ts');
 const originalFetch=global.fetch,token=process.env.TELEGRAM_BOT_TOKEN,chat=process.env.TELEGRAM_CHAT_ID;
 let deliveries=0,lastPayload;
 process.env.TELEGRAM_BOT_TOKEN='local-test-only';process.env.TELEGRAM_CHAT_ID='test';
 global.fetch=async (_url,options)=>{deliveries++;lastPayload=JSON.parse(options.body);assert.ok(options.signal);return Response.json({ok:true});};
 let seq=0;
 const request=(body,ip=String(++seq))=>new NextRequest('http://localhost/api/contact',{method:'POST',headers:{'Content-Type':'application/json','x-forwarded-for':ip},body:typeof body==='string'?body:JSON.stringify(body)});
 try {
  assert.equal((await POST(request(valid))).status,200);assert.equal(lastPayload.parse_mode,undefined);assert.ok(lastPayload.text.includes(valid.message));
  const sent=deliveries;assert.equal((await POST(request('{'))).status,400);assert.equal((await POST(request({...valid,email:'bad'}))).status,400);assert.equal((await POST(request('x'.repeat(9000)))).status,413);assert.equal(deliveries,sent);
  global.fetch=async()=>Response.json({ok:false});assert.equal((await POST(request(valid))).status,502);
  global.fetch=async()=>{throw new DOMException('Timed out','TimeoutError');};assert.equal((await POST(request(valid))).status,502);
  delete process.env.TELEGRAM_BOT_TOKEN;assert.equal((await POST(request(valid))).status,503);
  for(let i=0;i<5;i++)await POST(request(valid,'rate-test'));
  const limited=await POST(request(valid,'rate-test'));assert.equal(limited.status,429);assert.ok(Number(limited.headers.get('Retry-After'))>0);
 } finally {global.fetch=originalFetch;if(token===undefined)delete process.env.TELEGRAM_BOT_TOKEN;else process.env.TELEGRAM_BOT_TOKEN=token;if(chat===undefined)delete process.env.TELEGRAM_CHAT_ID;else process.env.TELEGRAM_CHAT_ID=chat;}
 console.log('PASS: legacy preservation, 11 detailed case studies, readable skills, curated selection, assets, navigation, shared validation, and mocked contact delivery/failure/rate limits.');
}
run().catch(error=>{console.error(error);process.exitCode=1;});
