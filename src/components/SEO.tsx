import { NextSeo } from 'next-seo';
import React from 'react';

const title = 'aldotestino';
const description = 'Software Engineering student';

function SEO() {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={
        {
          title,
          description,
          images: [
            {
              url: '/favicon.png',
              width: 600,
              height: 600,
              alt: 'Og Image Alt',
            }
          ]
        }
      }
      additionalLinkTags={
        [
          {
            rel: 'icon',
            href: '/favicon.ico'
          }
        ]
      }
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary',
      }}
    />
  );
}

export default SEO;