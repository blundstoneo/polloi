import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/server/db";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt"
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};
