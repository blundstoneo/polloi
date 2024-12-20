import { prisma } from "../../../server/db";
import { type GetServerSidePropsContext } from "next";
import NextAuth, {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
};

export function auth(req: GetServerSidePropsContext["req"], res: GetServerSidePropsContext["res"]) {
  return getServerSession(req, res, authOptions);
}

// Export default handler
export default NextAuth(authOptions);
