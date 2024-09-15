"use client";

import type { AuthLogoutBtnProps } from "@/types/componentProps";
import logoutAction from "@/utils/logoutAction";
// import handleDropDown from "@/utils/handleDropDown";
import "./index.scss";

const AuthLogoutBtn = ({
  classType = "",
  setIsCategoryList,
  setIsDropDown,
}: AuthLogoutBtnProps) => {
  return (
    // <form
    //   className={`AuthLogoutBtn ${classType}`}
    //   action={logoutAction}
    //   onClick={
    //     setIsCategoryList && setIsDropDown
    //       ? () => handleDropDown(setIsCategoryList, setIsDropDown)
    //       : undefined
    //   }
    // >
    <button
      className={`AuthLogoutBtn ${classType}`}
      onClick={() => logoutAction(setIsCategoryList, setIsDropDown)}
    >
      Logout
    </button>
    // </form>
  );
};

export default AuthLogoutBtn;
