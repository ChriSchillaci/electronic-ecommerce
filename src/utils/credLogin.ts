"use server";

import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";

const credLogin = async (formData: FormData) => {
  try {
    await signIn("credentials", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    });

    return { message: "Login successful", status: true };
  } catch (err) {
    if (err instanceof AuthError) {
      if (err.type === "CredentialsSignin") {
        return { message: "Invalid credentials", status: false };
      }
    }
    return { message: "Something went wrong", status: false };
  }
};
export default credLogin;
