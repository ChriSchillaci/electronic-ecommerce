import Link from "next/link";
import handleCategoryBtn from "@/utils/handleCategoryBtn";
import categoryMocks from "@/mocks/categoryMocks";
import type { DropDownProps } from "@/types/componentProps";
import "./index.scss";

const DropDown = ({ isDropDown, setIsDropDown, router }: DropDownProps) => {
  return (
    <div className={`DropDown ${isDropDown ? "active" : ""}`}>
      <Link
        className="link-container"
        href={"/"}
        onClick={() => setIsDropDown((prev) => !prev)}
      >
        Home
      </Link>
      <Link
        className="link-container"
        href={"/store"}
        onClick={() => setIsDropDown((prev) => !prev)}
      >
        Store
      </Link>
      <div className="link-container ">
        <p>Categories</p>
        <div className="categories-dropdown">
          {categoryMocks.map((item, idx) => (
            <button
              key={idx}
              className="categories-dropdown__link"
              value={item.value}
              onClick={(e) => handleCategoryBtn(e, router, null, setIsDropDown)}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
      <Link
        className="link-container"
        href={"/contact-us"}
        onClick={() => setIsDropDown((prev) => !prev)}
      >
        Contact us
      </Link>
      <Link
        className="link-container"
        href={"/login"}
        onClick={() => setIsDropDown((prev) => !prev)}
      >
        Login
      </Link>
      <Link
        className="link-container"
        href={"/register"}
        onClick={() => setIsDropDown((prev) => !prev)}
      >
        Register
      </Link>
    </div>
  );
};

export default DropDown;
