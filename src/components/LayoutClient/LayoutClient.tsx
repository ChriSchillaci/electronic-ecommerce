"use client";

import Slider from "../Slider";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "./index.scss";
import type { Session } from "next-auth";
import { useAppDispatch, useAppSelector } from "@/utils/redux-store/hooks";
import { addUser } from "@/utils/redux-store/features/user/userSlice";

const LayoutClient = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) => {
  const pathname = usePathname();

  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      return;
    }

    dispatch(addUser(session));
  }, [dispatch, session, user]);

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
