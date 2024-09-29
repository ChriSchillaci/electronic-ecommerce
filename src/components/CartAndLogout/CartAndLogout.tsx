import AuthLogoutBtn from "../AuthLogoutBtn";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import "./index.scss";

const CartAndLogout = () => {
  return (
    <div className="CartAndLogout">
      <Link href={"/cart"}>
        <FaShoppingCart className="CartAndLogout__icon" />
      </Link>
      <AuthLogoutBtn />
    </div>
  );
};

export default CartAndLogout;
