import Link from "next/link";
import "./index.scss";

const AuthBtns = () => {
  return (
    <div className="AuthBtns">
      <Link href={"/login"}>Login</Link>
      <Link className="register-btn" href={"/register"}>
        Register
      </Link>
    </div>
  );
};

export default AuthBtns;