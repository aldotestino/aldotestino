'only server';

import env from '@/lib/env';

export async function sendTelegramNotification({ email, notionUrl }: { email: string; notionUrl: string }) {
  const telegramUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_API_KEY}/sendMessage`;

  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('chat_id', env.TELEGRAM_CHANNEL_ID);
  urlSearchParams.set('text', `Nuovo messaggio da: ${email}\n${notionUrl}`);

  const res = await fetch(`${telegramUrl}?${urlSearchParams.toString()}`, {
    method: 'POST',
  });

  return res.json();
}
