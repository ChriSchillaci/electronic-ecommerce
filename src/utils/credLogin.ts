"use client";

// import { signIn } from "@/app/auth";
import { signIn } from "next-auth/react";

// import { AuthError } from "next-auth";

const credLogin = async (formData: FormData) => {
  try {
    const res = await signIn("credentials", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    });
    console.log(res);

    if (res?.error === "CredentialsSignin") {
      throw Error("Invalid credentials");
    }

    return { message: "Login successful", status: true };
  } catch (err) {
    // if (err instanceof AuthError) {
    //   if (err.type === "CredentialsSignin") {
    //     return { message: "Invalid credentials", status: false };
    //   }
    // }
    if (err instanceof Error) {
      return { message: err.message, status: false };
    }
    return { message: "Something went wrong", status: false };
  }
};

export default credLogin;
