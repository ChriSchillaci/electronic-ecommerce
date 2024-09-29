import type { Dispatch, FormEvent, SetStateAction } from "react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { resMessageType } from "@/types/resTypes";

const handleRegisterSubmit = async (
  e: FormEvent<HTMLFormElement>,
  router: AppRouterInstance,
  setIsError: Dispatch<SetStateAction<{ status: boolean; message: string }>>
) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const formDataEntries = Object.fromEntries(form);
  const getFormData = {
    email: formDataEntries.email as string,
    password: formDataEntries.password as string,
  };

  try {
    if (getFormData.password.length < 5) {
      throw new Error("Insert a longer password");
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getFormData),
    });

    const data: resMessageType = await res.json();

    if (res.status === 409) {
      throw new Error(data.message);
    }

    router.push("/login");
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      setIsError({ status: false, message: e.message });
    }
  }
};

export default handleRegisterSubmit;
