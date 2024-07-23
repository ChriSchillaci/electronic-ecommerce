"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import DropDown from "../DropDown";
import "./index.scss";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleDropDown = () => {
    setIsDropDown((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products?name=${search}`);
  };

  return (
    <>
      <nav className="NavBar">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        <form onSubmit={handleSubmit} className="search-container">
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
          <Link href={"/"}>Products</Link>
          <div className="categories-container">
            <div className="categories-container__text">
              <p>Categories</p>
              <span className="arrow"></span>
            </div>
            <div className="categories-dropdown-laptop">
              <Link className="categories-link" href={"/"}>
                Link 1
              </Link>
              <Link className="categories-link" href={"/"}>
                Link 1
              </Link>
              <Link className="categories-link" href={"/"}>
                Link 1
              </Link>
            </div>
          </div>
        </div>
        <div className="credential-container">
          <Link href={"/login"}>Login</Link>
          <Link className="register-btn" href={"/register"}>
            Register
          </Link>
        </div>
        <button className="burger-btn" onClick={handleDropDown}>
          <span className={`burger-line ${isDropDown ? "active" : ""}`}></span>
          <span className={`burger-line ${isDropDown ? "active" : ""}`}></span>
          <span className={`burger-line ${isDropDown ? "active" : ""}`}></span>
        </button>
      </nav>
      <DropDown isDropDown={isDropDown} />
    </>
  );
};

export default NavBar;
