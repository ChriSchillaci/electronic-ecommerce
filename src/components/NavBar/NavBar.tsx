"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import DropDown from "../DropDown";
import handleCategoryBtn from "@/utils/handleCategoryBtn";
import categoryMocks from "@/mocks/categoryMocks";
import "./index.scss";

const NavBar = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSearchForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/store?search=${search}`);
  };

  return (
    <>
      <nav className="NavBar">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        <form onSubmit={handleSearchForm} className="search-container">
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
        <div className="links">
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
        <div className="credential-container">
          <Link href={"/login"}>Login</Link>
          <Link className="register-btn" href={"/register"}>
            Register
          </Link>
        </div>
        <button
          className="burger-btn"
          onClick={() => setIsDropDown((prev) => !prev)}
        >
          <span className={`burger-line ${isDropDown ? "active" : ""}`}></span>
          <span className={`burger-line ${isDropDown ? "active" : ""}`}></span>
          <span className={`burger-line ${isDropDown ? "active" : ""}`}></span>
        </button>
      </nav>
      <DropDown
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
        router={router}
      />
    </>
  );
};

export default NavBar;
