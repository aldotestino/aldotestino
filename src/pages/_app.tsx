import { AppProps } from 'next/dist/next-server/lib/router/router';
import NotificationProvider from '../components/Notification';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />
    </NotificationProvider>
  );
}

export default MyApp;
