import type { Dispatch, FormEvent, SetStateAction } from "react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import credLogin from "@/utils/credLogin";

const handleLoginSubmit = async (
  e: FormEvent<HTMLFormElement>,
  router: AppRouterInstance,
  setIsError: Dispatch<SetStateAction<{ status: boolean; message: string }>>
) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const res = await credLogin(formData);

  if (!res.status) {
    setIsError({ status: res.status, message: res.message });
    return;
  }

  // console.log("response from loginCred:", res);

  router.push("/");
  router.refresh();
};

export default handleLoginSubmit;
