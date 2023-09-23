import fetch from 'node-fetch';

interface UpdateNotionDBArgs {
  email?: string,
  message?: string
}

export async function updateNotionDB({ email, message }: UpdateNotionDBArgs) {
  const notion = await fetch('https://api.notion.com/v1/pages', {
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
        message: {
          rich_text: [
            {
              text: {
                content: message
              }
            }
          ]
        },
        createdAt: {
          date: {
            start: new Date().toISOString()
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

  return notion.json();
}