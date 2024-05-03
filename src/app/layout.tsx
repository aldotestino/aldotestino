import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const title = 'aldotestino';
const description = 'Software Engineering student & Full Stack Developer';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
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
  },
  twitter: {
    title,
    description,
    card: 'summary',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
