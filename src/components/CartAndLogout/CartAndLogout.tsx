import AuthLogoutBtn from "../AuthLogoutBtn";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./index.scss";

const CartAndLogout = () => {
  const router = useRouter();
  return (
    <div className="CartAndLogout">
      <FaShoppingCart
        className="CartAndLogout__icon"
        onClick={() => {
          router.push("/cart");
          router.refresh();
        }}
      />
      <AuthLogoutBtn />
    </div>
  );
};

export default CartAndLogout;
