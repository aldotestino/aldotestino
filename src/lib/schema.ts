import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactInput = z.infer<typeof contactSchema>;
