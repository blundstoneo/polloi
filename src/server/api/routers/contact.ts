import { z } from "zod";
import { router, publicProcedure } from "@/server/api/trpc/trpc";
import { prisma } from "@/lib/db";

export const contactRouter = router({
  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return prisma.contact.findMany({
        orderBy: { updatedAt: "desc" },
      });
    }),
    
  create: publicProcedure
    .input(z.object({
      name: z.string(),
      email: z.string().email().optional(),
      title: z.string().optional(),
      company: z.string().optional(),
      linkedInUrl: z.string().url().optional(),
      notes: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      return prisma.contact.create({
        data: input,
      });
    }),
    
  update: publicProcedure
    .input(z.object({
      id: z.string(),
      name: z.string(),
      email: z.string().email().optional(),
      title: z.string().optional(),
      company: z.string().optional(),
      linkedInUrl: z.string().url().optional(),
      notes: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      return prisma.contact.update({
        where: { id },
        data,
      });
    }),
    
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      return prisma.contact.delete({
        where: { id: input.id },
      });
    }),
});
