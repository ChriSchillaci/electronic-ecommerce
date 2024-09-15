import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Dispatch, SetStateAction, FormEvent } from "react";
import handleLoginSubmit from "./handleLoginSubmit";
import handleRegisterSubmit from "./handleRegisterSubmit";

const handleCredSubmit = async (
  e: FormEvent<HTMLFormElement>,
  router: AppRouterInstance,
  setIsError: Dispatch<SetStateAction<{ status: boolean; message: string }>>,
  setIsPending: Dispatch<SetStateAction<boolean>>,
  isLoginPage: boolean
) => {
  setIsPending(true);
  if (isLoginPage) {
    await handleLoginSubmit(e, router, setIsError);
  } else {
    await handleRegisterSubmit(e, router, setIsError);
  }
  setIsPending(false);
};

export default handleCredSubmit;
