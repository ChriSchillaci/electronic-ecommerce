import { blankCartCards } from "@/mocks/blankCards";
import { RxCross1 } from "react-icons/rx";
import "./index.scss";

const CartSkeleton = () => {
  return (
    <>
      {blankCartCards.map((_, idx) => {
        return (
          <div key={idx} className="CartProduct">
            <div className="CartProduct__img skeleton" />
            <h3 className="CartProduct__title skeleton"></h3>
            <div className="InputQuantity Cart skeleton"></div>
            <h3 className="CartProduct__price skeleton"></h3>
            <RxCross1 className="CartProduct__icon" />
          </div>
        );
      })}
    </>
  );
};

export default CartSkeleton;
