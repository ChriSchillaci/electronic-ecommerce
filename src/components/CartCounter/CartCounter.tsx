import { useAppSelector } from "@/utils/redux-store/hooks";
import "./index.scss";

const CartCounter = ({ classType = "" }: { classType?: string }) => {
  const { totalQuantity } = useAppSelector((state) => state.user);

  return (
    <p className={`CartCounter ${classType}`}>
      {totalQuantity >= 100 ? "+99" : totalQuantity}
    </p>
  );
};

export default CartCounter;
