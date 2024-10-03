"use client";

import type { CheckoutProps } from "@/types/componentProps";
import handleCheckoutPrice from "@/utils/handleCheckoutPrice";
import "./index.scss";

const Checkout = ({ clientCardProds }: CheckoutProps) => {
  const { subResult, taxResult, totalPrice } =
    handleCheckoutPrice(clientCardProds);

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
      <button className="Checkout__btn">Checkout</button>
    </div>
  );
};

export default Checkout;
