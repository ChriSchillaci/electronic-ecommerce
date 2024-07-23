import Link from "next/link";
import "./index.scss";

const DropDown = ({ isDropDown }: { isDropDown: boolean }) => {
  return (
    <div className={`DropDown ${isDropDown ? "active" : ""}`}>
      <Link className="link-container" href={"/"}>
        Home
      </Link>
      <Link className="link-container" href={"/products"}>
        Products
      </Link>
      <div className="link-container ">
        <p>Categories</p>
        <div className="categories-dropdown">
          <Link className="categories-dropdown__link" href={"/"}>
            Link 1
          </Link>
          <Link className="categories-dropdown__link" href={"/"}>
            Link 2
          </Link>
          <Link className="categories-dropdown__link" href={"/"}>
            Link 3
          </Link>
        </div>
      </div>
      <Link className="link-container" href={"/contact-us"}>
        Contact us
      </Link>
      <Link className="link-container" href={"/login"}>
        Login
      </Link>
      <Link className="link-container" href={"/register"}>
        Register
      </Link>
    </div>
  );
};

export default DropDown;
