import { ReactNode } from "react";
import Image from "next/image";
import "./index.scss";

const CredFormWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="CredFormWrapper">
      <Image src={"/images/logo.png"} alt="logo" width={60} height={60} />
      {children}
    </div>
  );
};

export default CredFormWrapper;
