"use client";

import type { LayoutClientProps } from "@/types/componentProps";
import Slider from "../Slider";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/utils/redux-store/hooks";
import { addUser } from "@/utils/redux-store/features/user/userSlice";
import { addCart } from "@/utils/redux-store/features/user/userSlice";
import "./index.scss";
import { resCartProductType } from "@/types/resTypes";

const LayoutClient = ({ children, session, cart }: LayoutClientProps) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);

  const { cart_products } = cart as resCartProductType;

  useEffect(() => {
    dispatch(addUser(session));

    if ("status" in cart && cart.status && cart.status >= 400) {
      return;
    }

    dispatch(addCart(cart_products));
  }, [dispatch, session, user, pathname, cart, cart_products]);

  return (
    <>
      {pathname === "/" && <Slider />}
      <div className={`main-layout ${pathname === "/cart" ? "CartPage" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default LayoutClient;
