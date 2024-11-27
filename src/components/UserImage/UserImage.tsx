import type { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "@/utils/redux-store/hooks";
import getUserFirstLetters from "@/utils/getUserFirstLetters";
import "./index.scss";

const UserImage = ({
  classType = "",
  setIsUserDropdown,
}: {
  classType?: string;
  setIsUserDropdown?: Dispatch<SetStateAction<boolean>>;
}) => {
  const user = useAppSelector((state) => state.user.user?.user);

  const { first_name, last_name } = user || {};

  return (
    <div
      className={`UserImage ${classType}`}
      onClick={() =>
        setIsUserDropdown ? setIsUserDropdown((prev) => !prev) : undefined
      }
    >
      {first_name && last_name && getUserFirstLetters(first_name, last_name)}
    </div>
  );
};

export default UserImage;
