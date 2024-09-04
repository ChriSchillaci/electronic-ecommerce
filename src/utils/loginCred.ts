"use server";

import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";

const loginCred = async (formData: FormData) => {
  try {
    const result = await signIn("credentials", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    });

    return { msg: "Login successful", result };
  } catch (err) {
    if (err instanceof AuthError) {
      if (err.type === "CredentialsSignin") {
        return { msg: "Invalid credentials" };
      }

      return { msg: "Something went wrong" };
    }
  }
};

export default loginCred;
