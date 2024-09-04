import type { FormEvent } from "react";

const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

export default handleRegisterSubmit;
