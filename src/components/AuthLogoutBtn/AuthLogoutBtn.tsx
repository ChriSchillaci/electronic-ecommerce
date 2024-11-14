import type { AuthLogoutBtnProps } from "@/types/componentProps";
import logoutAction from "@/utils/logoutAction";
import handleDropDown from "@/utils/handleDropDown";
import "./index.scss";

const AuthLogoutBtn = ({
  classType = "",
  setIsCategoryList,
  setIsDropDown,
}: AuthLogoutBtnProps) => {
  return (
    <form
      className={`AuthLogoutBtn ${classType}`}
      action={logoutAction}
      onClick={
        setIsCategoryList && setIsDropDown
          ? () => handleDropDown(setIsDropDown, setIsCategoryList)
          : undefined
      }
    >
      <button className={`AuthLogoutBtn__btn ${classType}`} type="submit">
        Logout
      </button>
    </form>
  );
};

export default AuthLogoutBtn;
