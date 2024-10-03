"use client";

import type { CartProductsAndCheckoutProps } from "@/types/componentProps";
import { useState, useEffect } from "react";
import CartProduct from "../CartProduct/CartProduct";
import Checkout from "../Checkout";
import "./index.scss";

const CartProductsAndCheckout = ({
  cart_products,
  session,
}: CartProductsAndCheckoutProps) => {
  const [clientCartProds, setClientCart] = useState(cart_products);

  useEffect(() => {
    setClientCart(cart_products);
  }, [cart_products]);

  return (
    <>
      <div className="CartPage__products-container">
        {clientCartProds.length ? (
          clientCartProds.map((clientCartProd) => (
            <CartProduct
              key={clientCartProd.id}
              clientCartProd={clientCartProd}
              userId={session?.user?.id}
              setClientCart={setClientCart}
            />
          ))
        ) : (
          <h2 className="CartPage__products-container__empty-cart">
            The cart is empty
          </h2>
        )}
      </div>
      <Checkout clientCardProds={clientCartProds} />;
    </>
  );
};

export default CartProductsAndCheckout;
