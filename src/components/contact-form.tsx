'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import SubmitButton from '@/components/submit-button';
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
import type { MessageInput } from '@/lib/schema';
import { messageSchema } from '@/lib/schema';
import { sendMessage } from '@/server/actions';

function ContactForm() {
  const form = useForm<MessageInput>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: MessageInput) {
    const res = await sendMessage(values);
    if (res.message) {
      toast('Success', {
        description: res.message,
      });
    } else {
      toast('Error', {
        description: res.error,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        className="w-full max-w-screen-sm space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full justify-end">
          <SubmitButton />
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;
