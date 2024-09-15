import { Dispatch, SetStateAction } from "react";

const handleDropDown = (
  setIsCategoryList: Dispatch<SetStateAction<boolean>>,
  setIsDropDown: Dispatch<SetStateAction<boolean>>
) => {
  setIsDropDown((prev) => {
    if (prev) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    return !prev;
  });
  setIsCategoryList(false);
};

export default handleDropDown;
