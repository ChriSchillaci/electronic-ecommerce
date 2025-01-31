"use client";

import { useEffect, useState } from "react";
import CartProduct from "../CartProduct/CartProduct";
import { useAppSelector } from "@/utils/redux-store/hooks";
import CartSkeleton from "../skeletons/CartSkeleton";
import "./index.scss";

const CartProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const clientCart = useAppSelector((state) => state.user.cart_products);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {clientCart.length ? (
        <ul className="CartProducts">
          {clientCart.map((clientCartProd) => (
            <CartProduct
              key={clientCartProd.id}
              clientCartProd={clientCartProd}
            />
          ))}
        </ul>
      ) : isLoading ? (
        <ul className="CartProducts">
          <CartSkeleton />
        </ul>
      ) : (
        <div className="CartProducts">
          <p className="CartProducts__empty-cart">The cart is empty</p>
        </div>
      )}
    </>
  );
};

export default CartProducts;
