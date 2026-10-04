'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { contactSchema, ContactValues } from '@/lib/contact';

import Chat from '../svgs/Chat';

export default function ContactForm() {
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactValues) => {
    setIsSubmitting(true);
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(15000),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFeedback('Message sent successfully.');
        form.reset();
      } else {
        setFeedback(result.error || 'Delivery failed. Please retry or use email.');
        if (result.fields) for (const key of ['name','email','phone','message'] as const) { if (result.fields[key]?.[0]) form.setError(key, { message: result.fields[key][0] }); }
        toast.error(
          result.error || 'Failed to send message. Please try again.',
        );
      }
    } catch {
      setFeedback('Could not confirm delivery. Your message is still here; please retry or use email.');
      toast.error('Could not confirm delivery. Please retry or use email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader>
        <CardTitle>Send me a message</CardTitle>
        <CardDescription>
          Fill out the form below and I will get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input autoComplete="name" maxLength={100} placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (optional)</FormLabel>
                    <FormControl>
                      <Input type="tel" autoComplete="tel" placeholder="+91 98765 43210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your.email@example.com"
                      type="email" autoComplete="email" maxLength={254}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project or just say hello..."
                      maxLength={1000} className="min-h-[120px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="text-sm text-secondary">Your name, email, message, and optional phone number are forwarded to my private Telegram inbox so I can reply. Please avoid sending sensitive information. You can also <a className="underline" href="mailto:kunjdetroja52@gmail.com">email me directly</a>.</p>
            <p role="status" aria-live="polite" className="text-sm">{feedback}</p>
            <Button type="submit" className="w-fit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending your message...
                </>
              ) : (
                <>
                  <Chat className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
