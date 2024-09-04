"use client";

import handleRegisterSubmit from "@/utils/handleRegisterSubmit";

const RegisterForm = () => {
  return (
    <form onSubmit={handleRegisterSubmit}>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterForm;
