import { z } from 'zod';
export const contactSchema = z.object({
 name: z.string().trim().min(2, 'Name must be at least 2 characters.').max(100),
 email: z.string().trim().email('Please enter a valid email address.').max(254),
 phone: z.string().trim().max(30).optional().refine(value => !value || /^\+?[1-9]\d{6,14}$/.test(value.replace(/[\s().-]/g, '')), 'Enter a valid phone number or leave it empty.'),
 message: z.string().trim().min(10, 'Message must be at least 10 characters.').max(1000),
});
export type ContactValues = z.infer<typeof contactSchema>;
export const normalizePhone = (phone?: string) => (phone || '').replace(/[\s().-]/g, '');
export const telegramText = (data: ContactValues) => `New portfolio contact\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${normalizePhone(data.phone) || 'Not provided'}\n\n${data.message}`;
