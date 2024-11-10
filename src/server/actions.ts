'use server';

import type { MessageInput } from '@/lib/schema';
import { saveMessageToNotion } from '@/lib/notion';
import { sendTelegramNotification } from '@/lib/telegram';

export async function sendMessage(values: MessageInput) {
  try {
    const notionRes: any = await saveMessageToNotion(values);
    if (!notionRes.url) {
      return {
        error: 'Something went wrong, please try again later',
        message: null,
      };
    }
    await sendTelegramNotification({ email: values.email, notionUrl: notionRes.url });
    return {
      error: null,
      message: 'You will receive an email as soon as possible',
    };
  }
  catch (e: any) {
    console.error(e);
    return {
      error: 'Something went wrong, please try again later',
      message: null,
    };
  }
}
