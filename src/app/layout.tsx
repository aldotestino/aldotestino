import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { PHProvider } from '@/app/_analytics/provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

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
      <PHProvider>
        <body className={cn('min-h-screen font-sans antialiased dark', fontSans.variable)}>
          {children}
          <Toaster />
        </body>
      </PHProvider>
    </html>
  );
}
