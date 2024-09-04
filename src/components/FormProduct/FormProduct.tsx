"use client";

import { useState } from "react";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import "./index.scss";

const FormProduct = () => {
  const [quantityValue, setQuantityValue] = useState(1);

  const handleQuantityValue = (type: "prev" | "next") => {
    if (type === "prev") {
      setQuantityValue((prev) => prev - 1);
      return;
    }

    setQuantityValue((prev) => prev + 1);
  };

  return (
    <form className="FormProduct">
      <div className="FormProduct__quantity-container">
        <p className="FormProduct__quantity-container__text">Quantity</p>
        <div className="FormProduct__quantity-container__input-container">
          <button
            type="button"
            className="FormProduct__quantity-container__input-container__btn"
            onClick={() => handleQuantityValue("prev")}
            disabled={quantityValue <= 1}
          >
            <HiOutlineMinusSm />
          </button>
          <input
            className="FormProduct__quantity-container__input-container__input"
            type="number"
            value={quantityValue}
            readOnly
            onKeyDown={(e) => {
              e.preventDefault();
            }}
          />
          <button
            type="button"
            className="FormProduct__quantity-container__input-container__btn"
            onClick={() => handleQuantityValue("next")}
            disabled={quantityValue >= 10}
          >
            <HiOutlinePlusSm />
          </button>
        </div>
      </div>

      <div className="FormProduct__btns-container">
        <button className="FormProduct__btns-container__btn">
          Add to cart
        </button>
        <button className="FormProduct__btns-container__btn">Buy now</button>
      </div>
    </form>
  );
};

export default FormProduct;
