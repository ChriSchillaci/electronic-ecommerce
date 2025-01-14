import type { DropDownProps } from "@/types/componentProps";
import Link from "next/link";
import handleCategoryBtn from "@/utils/handleCategoryBtn";
import handleDropDown from "@/utils/handleDropDown";
import categoryMocks from "@/mocks/categoryMocks";
import AuthLogoutBtn from "../AuthLogoutBtn";
import CartCounter from "../CartCounter";
import "./index.scss";

const DropDown = ({
  isDropDown,
  setIsDropDown,
  isCategoryList,
  setIsCategoryList,
  router,
  session,
}: DropDownProps) => {
  return (
    <>
      <div
        className={`DropDown__bg-opacity ${isDropDown ? "active" : ""}`}
        onClick={() => handleDropDown(setIsDropDown, setIsCategoryList)}
      />
      <div className={`DropDown ${isDropDown ? "active" : ""}`}>
        <Link
          className="link-container"
          href={"/"}
          onClick={() => handleDropDown(setIsDropDown, setIsCategoryList)}
        >
          Home
        </Link>
        <Link
          className="link-container"
          href={"/store"}
          onClick={() => handleDropDown(setIsDropDown, setIsCategoryList)}
        >
          Store
        </Link>
        <div
          className="link-container"
          onClick={() => setIsCategoryList((prev) => !prev)}
        >
          <p>Categories</p>
        </div>
        <div
          className={`categories-dropdown ${isCategoryList ? "active" : ""}`}
        >
          {categoryMocks.map((item, idx) => (
            <button
              key={idx}
              className="categories-dropdown__link"
              value={item.value}
              onClick={(e) =>
                handleCategoryBtn(
                  e,
                  router,
                  null,
                  setIsDropDown,
                  setIsCategoryList
                )
              }
            >
              {item.text}
            </button>
          ))}
        </div>
        {!session ? (
          <>
            <Link
              className={`link-container`}
              href={"/login"}
              onClick={() => handleDropDown(setIsDropDown, setIsCategoryList)}
            >
              Login
            </Link>
            <Link
              className={`link-container`}
              href={"/register"}
              onClick={() => handleDropDown(setIsDropDown, setIsCategoryList)}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <div
              className={`link-container`}
              onClick={() => {
                handleDropDown(setIsDropDown, setIsCategoryList);
                router.push("/cart");
                router.refresh();
              }}
            >
              <p>Cart</p>
              <CartCounter />
            </div>
            <AuthLogoutBtn
              classType="dropdown"
              setIsCategoryList={setIsCategoryList}
              setIsDropDown={setIsDropDown}
            />
          </>
        )}
      </div>
    </>
  );
};

export default DropDown;
