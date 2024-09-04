import { Dispatch, SetStateAction } from "react";

const handleDropDown = (
  setIsCategoryList: Dispatch<SetStateAction<boolean>>,
  setIsDropDown: Dispatch<SetStateAction<boolean>>
) => {
  setIsDropDown((prev) => !prev);
  setIsCategoryList(false);
};

export default handleDropDown;
