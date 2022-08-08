import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';
import { updateNotionDB } from '../../../utils/notion';
import { sendTelegramNotification } from '../../../utils/telegram';

export const appRouter = trpc
  .router()
  .mutation('contact', {
    input: z.object({
      email: z.string().email(),
      message: z.string()
    }).required(),
    resolve: async ({ input }) => {
      const res = await updateNotionDB(input);
      console.log(res);

      if (res.object === 'error') {
        throw new trpc.TRPCError({
          code: 'BAD_REQUEST',
          message: 'Something went wrong'
        });
      } else {
        const tres = await sendTelegramNotification({ email: input.email, notion_url: (res.url as string) });
        console.log(tres);
        return {
          sucess: true,
          data: {
            message: 'You will receive an email as soon as possible'
          }
        };
      }
    }
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});