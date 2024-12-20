import { z } from "zod";
import { router, publicProcedure } from "@/server/api/trpc/trpc";

export const testRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
