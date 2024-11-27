import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthLogoutBtn from "../AuthLogoutBtn";
import UserImage from "../UserImage";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "@/utils/redux-store/hooks";
import "./index.scss";

const CartAndLogout = () => {
  const router = useRouter();
  const [isUserDropdown, setIsUserDropdown] = useState(false);
  const { totalQuantity } = useAppSelector((state) => state.user);
  const user = useAppSelector((state) => state.user.user?.user);
  const { first_name, last_name, email } = user || {};

  return (
    <div className="CartAndLogout">
      <div
        className="CartAndLogout__icon-container"
        onClick={() => {
          router.push("/cart");
          router.refresh();
        }}
      >
        <FaShoppingCart className="CartAndLogout__icon-container__icon" />
        <p className="CartAndLogout__icon-container__counter">
          {totalQuantity >= 100 ? "+99" : totalQuantity}
        </p>
      </div>
      <div
        className={`CartAndLogout__user-image-container ${
          isUserDropdown ? "active" : ""
        }`}
      >
        <UserImage setIsUserDropdown={setIsUserDropdown} />
      </div>

      {/*Dropdown*/}
      <div
        className={`CartAndLogout__user-container ${
          isUserDropdown ? "active" : ""
        }`}
      >
        <UserImage classType="details" />
        <div className="CartAndLogout__user-container__details">
          <p>
            {first_name} {last_name}
          </p>
          <p className="CartAndLogout__user-container__details__email">
            {email}
          </p>
          <AuthLogoutBtn />
        </div>
      </div>
    </div>
  );
};

export default CartAndLogout;
