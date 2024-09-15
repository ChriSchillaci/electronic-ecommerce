"use server";

import { signOut } from "@/app/auth";

const logoutAction = async () => {
  await signOut({ redirectTo: "/login" });
};

export default logoutAction;

// "use client";

// import { signOut } from "next-auth/react";
// import type { Dispatch, SetStateAction } from "react";
// import handleDropDown from "./handleDropDown";

// const logoutAction = (
//   setIsCategoryList?: Dispatch<SetStateAction<boolean>>,
//   setIsDropDown?: Dispatch<SetStateAction<boolean>>
// ) => {
//   if (setIsCategoryList && setIsDropDown) {
//     handleDropDown(setIsCategoryList, setIsDropDown);
//   }

//   signOut({ callbackUrl: "/login" });
// };

// export default logoutAction;
