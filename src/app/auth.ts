import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import dbConnect from "@/utils/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          await dbConnect();
          const user = await User.findOne({ email: credentials?.email });

          if (user) {
            if (
              await bcrypt.compare(
                credentials?.password as string,
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
            console.error("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            throw new Error(err.message);
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
