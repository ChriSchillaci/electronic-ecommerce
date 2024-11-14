"use client";

import type { CartProductsProps } from "@/types/componentProps";
import { useEffect, useState } from "react";
import CartProduct from "../CartProduct/CartProduct";
import { useAppDispatch, useAppSelector } from "@/utils/redux-store/hooks";
import { addCart } from "@/utils/redux-store/features/user/userSlice";
import CartSkeleton from "../skeletons/CartSkeleton";
import "./index.scss";

const CartProducts = ({ cart_products }: CartProductsProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const clientCart = useAppSelector((state) => state.user.cart_products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addCart(cart_products));
    setIsLoading(false);
  }, [cart_products, dispatch]);

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
