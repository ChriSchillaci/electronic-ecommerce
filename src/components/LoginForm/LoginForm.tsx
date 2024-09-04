"use client";

import handleLoginSubmit from "@/utils/handleLoginSubmit";
import "./index.scss";

const LoginForm = () => {
  return (
    <form onSubmit={handleLoginSubmit}>
      <input type="email" name="email" placeholder="email" required />
      <input type="password" name="password" placeholder="password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
