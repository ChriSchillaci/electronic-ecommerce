"use server";

import { signIn } from "../app/(auth)";
import { AuthError } from "next-auth";

const loginCred = async (formData: FormData) => {
  try {
    await signIn("credentials", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    });
  } catch (err) {
    if (err instanceof AuthError) {
      if (err.type === "CredentialsSignin") {
        return { msg: "invalid credentials" };
      } else {
        return { msg: "something went wrong" };
      }
    }
    throw err;
  }
};

export default loginCred;
