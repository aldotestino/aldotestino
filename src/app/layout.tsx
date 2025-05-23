import type { Metadata } from 'next';
import { PHProvider } from '@/app/_analytics/provider';
import { CommandMenu } from '@/components/command-menu';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const title = 'aldotestino';
const description = 'Junior Software Engineer @ Albatross AI';

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
      },
    ],
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
    <html lang="en" suppressHydrationWarning>
      <PHProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <CommandMenu />
            <Toaster />
          </ThemeProvider>
        </body>
      </PHProvider>
    </html>
  );
}
