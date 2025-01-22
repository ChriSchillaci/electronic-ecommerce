import type { AuthBtnsProps } from "@/types/componentProps";
import handleDropDown from "@/utils/handleDropDown";
import Link from "next/link";
import "./index.scss";

const AuthBtns = ({
  classType = "",
  setIsDropDown,
  setIsCategoryList,
}: AuthBtnsProps) => {
  return (
    <div className={`AuthBtns ${classType}`}>
      <Link
        className={`AuthBtns__login-btn ${classType}`}
        href={"/login"}
        onClick={
          setIsDropDown && setIsCategoryList
            ? () => handleDropDown(setIsDropDown, setIsCategoryList)
            : undefined
        }
      >
        Sign in
      </Link>
      <Link
        className={`AuthBtns__register-btn ${classType}`}
        href={"/register"}
        onClick={
          setIsDropDown && setIsCategoryList
            ? () => handleDropDown(setIsDropDown, setIsCategoryList)
            : undefined
        }
      >
        Sign up
      </Link>
    </div>
  );
};

export default AuthBtns;
