import { router } from "./trpc/trpc";
import { testRouter } from "./routers/test";

export const appRouter = router({
  test: testRouter,
});

export type AppRouter = typeof appRouter;
