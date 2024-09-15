"use server";

import { signOut } from "@/app/auth";

const logoutAction = async () => {
  await signOut({ redirectTo: "/login" });
};

export default logoutAction;
