"use client";

import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdChevronRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import handleCategoryBtn from "@/utils/handleCategoryBtn";
import categoryMocks from "@/mocks/categoryMocks";
import "./index.scss";

const SideBar = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const router = useRouter();

  return (
    <>
      <MdChevronRight
        className="side-menu-btn"
        onClick={() => setIsSideBar((prev) => !prev)}
      />
      <div
        className={`side-menu-opacity ${isSideBar ? "active" : ""}`}
        onClick={() => setIsSideBar((prev) => !prev)}
      ></div>
      <div className={`SideBar ${isSideBar ? "active" : ""}`}>
        <RxCross1
          className="SideBar__close-icon"
          onClick={() => setIsSideBar((prev) => !prev)}
        />
        <h2 className="SideBar__category-title">Categories</h2>
        <div className="SideBar__categories">
          {categoryMocks.map((item, idx) => (
            <button
              key={idx}
              className="SideBar__categories__category"
              value={item.value}
              onClick={(e) => handleCategoryBtn(e, router, setIsSideBar)}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
