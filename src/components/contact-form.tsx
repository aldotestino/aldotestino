'use client';

import type { MessageInput } from '@/lib/schema';
import SubmitButton from '@/components/submit-button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { messageSchema } from '@/lib/schema';
import { sendMessage } from '@/server/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const form = useForm<MessageInput>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  const { toast } = useToast();

  async function onSubmit(values: MessageInput) {
    const res = await sendMessage(values);
    if (res.message) {
      toast({
        title: 'Success',
        description: res.message,
      });
    }
    else {
      toast({
        title: 'Error',
        description: res.error,
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-screen-sm">
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
