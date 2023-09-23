import { withTRPC } from '@trpc/next';
import { AppProps } from 'next/app';
import NotificationProvider from '../context/notification-context';
import '../styles/globals.css';
import { AppRouter } from './api/trpc/[trpc]';
import ActiveSectionContextProvider from '../context/active-section-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <ActiveSectionContextProvider>
        <Component {...pageProps} />
      </ActiveSectionContextProvider>
    </NotificationProvider>
  );
}

export default withTRPC<AppRouter>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = '/api/trpc';

    return {
      url,
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);
