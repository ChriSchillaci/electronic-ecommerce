"use client";

import { FormEvent } from "react";
import loginCred from "../../utils/loginCred";

const LoginForm = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await loginCred(formData);
    console.log("response from loginCred:", response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="email" required />
      <input type="password" name="password" placeholder="password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
