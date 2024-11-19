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
    <ul className="CartProducts">
      {clientCart.length ? (
        clientCart.map((clientCartProd) => (
          <CartProduct
            key={clientCartProd.id}
            clientCartProd={clientCartProd}
          />
        ))
      ) : isLoading ? (
        <CartSkeleton />
      ) : (
        <li className="CartProducts__empty-cart">The cart is empty</li>
      )}
    </ul>
  );
};

export default CartProducts;
