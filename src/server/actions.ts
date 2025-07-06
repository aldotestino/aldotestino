'use server';

import { saveMessageToNotion } from '@/lib/notion';
import type { MessageInput } from '@/lib/schema';
import { sendTelegramNotification } from '@/lib/telegram';

export async function sendMessage(values: MessageInput) {
  try {
    const notionRes = await saveMessageToNotion(values);
    if (!notionRes.url) {
      return {
        error: 'Something went wrong, please try again later',
        message: null,
      };
    }
    await sendTelegramNotification({
      email: values.email,
      notionUrl: notionRes.url,
    });
    return {
      error: null,
      message: 'You will receive an email as soon as possible',
    };
    // biome-ignore lint/suspicious/noExplicitAny: error is any
  } catch (e: any) {
    // biome-ignore lint/suspicious/noConsole: show error in vercel logs
    console.error(e);
    return {
      error: 'Something went wrong, please try again later',
      message: null,
    };
  }
}
