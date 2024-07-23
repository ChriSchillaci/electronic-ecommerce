"use client";

import { FormEvent } from "react";

interface FormDataType {
  email: string;
  password: string;
}

const RegisterForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formDataEntries = Object.fromEntries(form);
    const getFormData: FormDataType = {
      email: formDataEntries.email as string,
      password: formDataEntries.password as string,
    };

    try {
      if (getFormData.password.length < 5) {
        throw new Error("Insert a longer password");
      }

      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getFormData),
      });

      if (res.status === 409) {
        throw new Error("user already exists");
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterForm;
