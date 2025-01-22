import type { DropDownProps } from "@/types/componentProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import handleCategoryBtn from "@/utils/handleCategoryBtn";
import handleDropDown from "@/utils/handleDropDown";
import categoryMocks from "@/mocks/categoryMocks";
import AuthBtns from "../AuthBtns";
import AuthLogoutBtn from "../AuthLogoutBtn";
import CartCounter from "../CartCounter";
import { IoIosArrowDown } from "react-icons/io";
import "./index.scss";

const DropDown = ({
  isDropDown,
  setIsDropDown,
  isCategoryList,
  setIsCategoryList,
  router,
  session,
}: DropDownProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`DropDown ${
        isDropDown ? `active ${pathname === "/" ? "Home" : ""}` : ""
      }`}
    >
      <Link
        className="DropDown__link-container"
        href={"/"}
        onClick={() => handleDropDown(setIsDropDown, setIsCategoryList)}
      >
        Home
      </Link>
      <Link
        className="DropDown__link-container"
        href={"/store"}
        onClick={() => handleDropDown(setIsDropDown, setIsCategoryList)}
      >
        Store
      </Link>
      <div
        className="DropDown__link-container"
        onClick={() => setIsCategoryList((prev) => !prev)}
      >
        <p>Categories</p>
        <IoIosArrowDown
          className={`DropDown__link-container__icon ${
            isCategoryList ? "active" : ""
          }`}
        />
      </div>
      <div
        className={`DropDown__categories-dropdown ${
          isCategoryList ? "active" : ""
        }`}
      >
        {categoryMocks.map((item, idx) => (
          <button
            key={idx}
            className="DropDown__categories-dropdown__link"
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
        <AuthBtns
          classType="dropdown"
          setIsDropDown={setIsDropDown}
          setIsCategoryList={setIsCategoryList}
        />
      ) : (
        <>
          <div
            className={`DropDown__link-container`}
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
  );
};

export default DropDown;
