'only server';

import { env } from '@/lib/env';
import type { MessageInput } from '@/lib/schema';

export async function saveMessageToNotion({ email, message }: MessageInput) {
  const notion = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    body: JSON.stringify({
      parent: { database_id: env.NOTION_DATABASE_ID },
      properties: {
        email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        createdAt: {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    }),
    headers: {
      Authorization: `Bearer ${env.NOTION_SECRET}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2021-05-13',
    },
  });

  return notion.json();
}
