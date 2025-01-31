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
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import "./index.scss";

const NavBar = ({ session }: NavBarProps) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [search, setSearch] = useState("");
  const [isCategoryList, setIsCategoryList] = useState(false);

  const router = useRouter();

  return (
    <>
      <nav className="NavBar">
        <div className="NavBar__container">
          <Link className="NavBar__container__link-logo" href={"/"}>
            <Image
              className="NavBar__container__link-logo__logo"
              src="/images/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
          <div className="NavBar__container__links">
            <Link href={"/"}>
              <Image src="/images/logo.png" alt="logo" width={50} height={50} />
            </Link>
            <Link className="NavBar__container__links__link" href={"/"}>
              Home
            </Link>
            <Link className="NavBar__container__links__link" href={"/store"}>
              Store
            </Link>
            <div className="categories-container">
              <div className="categories-container__text">
                <button className="categories-container__text__btn">
                  Categories
                </button>
                <IoIosArrowDown className="arrow" />
              </div>
              <div className="categories-dropdown-laptop">
                <div className="categories-dropdown-laptop__container">
                  {categoryMocks.map((item, idx) => (
                    <button
                      key={idx}
                      className="categories-dropdown-laptop__container__link"
                      value={item.value}
                      onClick={(e) => handleCategoryBtn(e, router)}
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => handleSearchForm(e, search, router)}
            className="search-container"
          >
            <button className="search-btn" type="submit" aria-label="Search">
              <IoIosSearch className="search-icon" />
            </button>
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              aria-label="Search"
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
            aria-label="Menu burger"
          >
            <span
              className={`burger-line ${isDropDown ? "active" : ""}`}
            ></span>
            <span
              className={`burger-line ${isDropDown ? "active" : ""}`}
            ></span>
            <span
              className={`burger-line ${isDropDown ? "active" : ""}`}
            ></span>
          </button>
        </div>
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
