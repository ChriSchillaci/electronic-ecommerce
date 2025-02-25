import "next-auth/jwt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/utils/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const user = await db.users.findUnique({
            where: { email: credentials.email as string },
          });

          if (!user) {
            throw new Error("User not found");
          }

          if (
            !(await bcrypt.compare(
              credentials.password as string,
              user.password
            ))
          ) {
            throw new Error("invalid credentials");
          }

          return user;
        } catch (err) {
          if (err instanceof Error) {
            console.error(err.message);
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user && user.last_name && user.first_name) {
        token.id = user.id;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.first_name = token.first_name;
      session.user.last_name = token.last_name;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 86400,
  },
});
