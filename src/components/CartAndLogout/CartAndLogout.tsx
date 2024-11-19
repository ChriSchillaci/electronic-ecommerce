import AuthLogoutBtn from "../AuthLogoutBtn";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/utils/redux-store/hooks";
import "./index.scss";

const CartAndLogout = () => {
  const router = useRouter();
  const { totalQuantity } = useAppSelector((state) => state.user);

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
      <AuthLogoutBtn />
    </div>
  );
};

export default CartAndLogout;
