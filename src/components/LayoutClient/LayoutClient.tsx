"use client";

import Slider from "../Slider";
import { usePathname } from "next/navigation";
import "./index.scss";

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && <Slider />}
      <div className={`main-layout ${pathname === "/" ? "home" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default LayoutClient;
