"use client";

import type { LayoutClientProps } from "@/types/componentProps";
import Slider from "../Slider";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/utils/redux-store/hooks";
import { addUser } from "@/utils/redux-store/features/user/userSlice";
import { addCart } from "@/utils/redux-store/features/user/userSlice";
import "./index.scss";

const LayoutClient = ({
  children,
  session,
  cart_products,
}: LayoutClientProps) => {
  const pathname = usePathname();

  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(addCart(cart_products));
      return;
    }

    dispatch(addUser(session));
  }, [dispatch, session, user, pathname, cart_products]);

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
