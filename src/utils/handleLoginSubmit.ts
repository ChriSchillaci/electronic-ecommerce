import type { FormEvent } from "react";
import loginCred from "@/utils/loginCred";

const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const response = await loginCred(formData);
  console.log("response from loginCred:", response);
};

export default handleLoginSubmit;
