import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import handleDropDown from "./handleDropDown";

const handleCategoryBtn = (
  e: MouseEvent<HTMLButtonElement>,
  router: AppRouterInstance,
  setIsSideBar?: Dispatch<SetStateAction<boolean>> | null,
  setIsDropDown?: Dispatch<SetStateAction<boolean>> | null,
  setIsCategoryList?: Dispatch<SetStateAction<boolean>> | null
) => {
  const { value } = e.currentTarget;
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/store`);

  setIsSideBar && setIsSideBar((prev) => !prev);

  if (setIsDropDown && setIsCategoryList)
    handleDropDown(setIsCategoryList, setIsDropDown);

  if (!value) {
    return router.push(url.toString());
  }

  url.searchParams.append("category", value);

  router.push(url.toString());
};

export default handleCategoryBtn;