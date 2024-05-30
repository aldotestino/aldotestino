import env from './env';

interface TelegramNotification {
  email: string,
  notion_url: string
}

const TELEGRAM_API_URL = `https://api.telegram.org/bot${env.TELEGRAM_BOT_API_KEY}/sendMessage?chat_id=${env.TELEGRAM_CHANNEL_ID}&text=`;

export async function sendTelegramNotification({ email, notion_url }: TelegramNotification) {
  const text = `Nuovo messaggio da: ${email}\n${notion_url}`;
  const encodedText = encodeURI(text);

  const res = await fetch(`${TELEGRAM_API_URL}${encodedText}`, {
    method: 'POST'
  });

  return res.json();
}
