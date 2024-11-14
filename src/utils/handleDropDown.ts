import type { Dispatch, SetStateAction } from "react";

const handleDropDown = (
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  setIsCategoryList?: Dispatch<SetStateAction<boolean>>
) => {
  setIsOpen((prev) => {
    if (prev) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    return !prev;
  });
  setIsCategoryList && setIsCategoryList(false);
};

export default handleDropDown;
