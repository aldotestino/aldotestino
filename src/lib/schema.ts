import { z } from 'zod';

export const messageSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

export type MessageInput = z.infer<typeof messageSchema>;
