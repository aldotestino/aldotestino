interface TelegramNotification {
  email: string,
  notion_url: string
}

const { BOT_API_KEY, CHANNEL_ID } = process.env;

const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_API_KEY}/sendMessage?chat_id=${CHANNEL_ID}&text=`;

export async function sendTelegramNotification({ email, notion_url }: TelegramNotification) {
  const text = `Nuovo messaggio da: ${email}\n${notion_url}`;
  const encodedText = encodeURI(text);

  const res = await fetch(`${TELEGRAM_API_URL}${encodedText}`, {
    method: 'POST'
  });

  return res.json();
}
