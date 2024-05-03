'use server';

import { updateNotionDB } from '@/lib/notion';
import { sendTelegramNotification } from '@/lib/telegram';

export async function sendMessage({ email, message }: { email: string, message: string }) {
  const notionRes: any = await updateNotionDB({ email, message });
  if (notionRes.object === 'error') {
    throw new Error('Something went wrong. Please try again later.');
  } else {
    await sendTelegramNotification({ email, notion_url: (notionRes.url as string) });
    return {
      message: 'You will receive an email as soon as possible.'
    };
  }
}