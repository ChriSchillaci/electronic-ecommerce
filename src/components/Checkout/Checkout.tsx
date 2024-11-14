"use client";

import { useAppDispatch, useAppSelector } from "@/utils/redux-store/hooks";
import { handleModal } from "@/utils/redux-store/features/user/userSlice";
import "./index.scss";

const Checkout = () => {
  const { subResult, taxResult, totalPrice } = useAppSelector(
    (state) => state.user.checkout
  );
  const { cart_products } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  return (
    <div className="Checkout">
      <h2 className="Checkout__title">Summary</h2>
      <div className="Checkout__summary">
        <p className="Checkout__summary__subtotal-tax">Subtotal</p>
        <p className="Checkout__summary__price">€{subResult}</p>
        <p className="Checkout__summary__subtotal-tax">Tax</p>
        <p className="Checkout__summary__price">€{taxResult}</p>
      </div>
      <div className="Checkout__total">
        <p>Total</p>
        <p className="Checkout__total__price">€{totalPrice}</p>
      </div>
      <button
        type="button"
        className={`Checkout__btn ${!cart_products.length ? "active" : ""}`}
        disabled={!cart_products.length}
        onClick={() =>
          dispatch(
            handleModal("Are you sure you want to purchase these items?")
          )
        }
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
