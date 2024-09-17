import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/utils/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
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

          if (user) {
            if (
              await bcrypt.compare(
                credentials.password as string,
                user.password
              )
            ) {
              console.log("user logged in");
              return user;
            }
          }
          console.log("invalid credentials");
          return null;
        } catch (err) {
          if (err instanceof Error) {
            console.error(
              "errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
              err.message
            );
          }
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
