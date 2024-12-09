"use client";

import type { ChangeEvent } from "react";
import type { NavBarProps } from "@/types/componentProps";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DropDown from "../DropDown";
import AuthBtns from "../AuthBtns";
import CartAndLogout from "../CartAndLogout";
import categoryMocks from "@/mocks/categoryMocks";
import handleCategoryBtn from "@/utils/handleCategoryBtn";
import handleSearchForm from "@/utils/handleSearchForm";
import handleDropDown from "@/utils/handleDropDown";
import { IoIosSearch } from "react-icons/io";
import "./index.scss";

const NavBar = ({ session }: NavBarProps) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [search, setSearch] = useState("");
  const [isCategoryList, setIsCategoryList] = useState(false);

  const router = useRouter();

  return (
    <>
      <nav className="NavBar">
        <Link className="NavBar__link-logo" href={"/"}>
          <Image
            className="NavBar__link-logo__logo"
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="links">
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/store"}>Store</Link>
          <div className="categories-container">
            <div className="categories-container__text">
              <p>Categories</p>
              <span className="arrow"></span>
            </div>
            <div className="categories-dropdown-laptop">
              {categoryMocks.map((item, idx) => (
                <button
                  key={idx}
                  className="categories-dropdown-laptop__link"
                  value={item.value}
                  onClick={(e) => handleCategoryBtn(e, router)}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => handleSearchForm(e, search, router)}
          className="search-container"
        >
          <button className="search-btn" type="submit">
            <IoIosSearch className="search-icon" />
          </button>
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </form>
        {!session ? <AuthBtns /> : <CartAndLogout />}
        <button
          className="burger-btn"
          onClick={() => handleDropDown(setIsDropDown, setIsCategoryList)}
        >
          <span className={`burger-line ${isDropDown ? "active" : ""}`}></span>
          <span className={`burger-line ${isDropDown ? "active" : ""}`}></span>
          <span className={`burger-line ${isDropDown ? "active" : ""}`}></span>
        </button>
      </nav>
      <DropDown
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
        isCategoryList={isCategoryList}
        setIsCategoryList={setIsCategoryList}
        router={router}
        session={session}
      />
    </>
  );
};

export default NavBar;
