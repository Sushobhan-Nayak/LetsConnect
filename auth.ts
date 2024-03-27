import prisma from "@/lib/prisma";
import { PrismaClient, Prisma } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";

export const config = {
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ token, user }) {
      const prismaUser = await prisma.user.findFirst({
        where: { email: token.email },
      });
      if (!prismaUser) {
        token.id = user.id;
        return token;
      }
      if (!prismaUser.username) {
        await prisma.user.update({
          where: { id: prismaUser.id },
          data: {
            username: prismaUser.name?.split("").join("").toLowerCase(),
          },
        });
      }
      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        username: prismaUser.email,
        picture: prismaUser.image,
      };
    },
  },
} satisfies NextAuthOptions;

export default NextAuth(config);
