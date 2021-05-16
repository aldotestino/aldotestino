import fetch from 'node-fetch';

interface UpdateNotionDBArgs {
  email: string,
  createdAt: Date
}

export async function updateNotionDB({ email, createdAt }: UpdateNotionDBArgs): Promise<void> {
  fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    body: JSON.stringify({
      parent: { database_id: process.env.NOTION_DATABASE_URL },
      properties: {
        email: {
          title: [
            {
              text: {
                content: email
              }
            }
          ]
        },
        createdAt: {
          date: {
            start: createdAt.toISOString()
          }
        }
      }
    }),
    headers: {
      Authorization: `Bearer ${process.env.NOTION_SECRET}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2021-05-13'
    }
  });
}