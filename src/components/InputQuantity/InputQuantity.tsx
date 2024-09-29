"use client";

import type { InputQuantityProps } from "@/types/componentProps";
import { useState } from "react";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import handleQuantityValue from "@/utils/handleQuantityValue";
import "./index.scss";

const InputQuantity = ({
  classType = "",
  quantity = 1,
}: InputQuantityProps) => {
  const [quantityValue, setQuantityValue] = useState(quantity);

  return (
    <div className={`InputQuantity ${classType}`}>
      <button
        type="button"
        className={`InputQuantity__btn ${classType}`}
        onClick={() => handleQuantityValue("prev", setQuantityValue)}
        disabled={quantityValue <= 1}
      >
        <HiOutlineMinusSm />
      </button>
      <input
        className={`InputQuantity__input ${classType}`}
        type="number"
        name="quantity"
        value={quantityValue}
        readOnly
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
      <button
        type="button"
        className={`InputQuantity__btn ${classType}`}
        onClick={() => handleQuantityValue("next", setQuantityValue)}
        disabled={quantityValue >= 5}
      >
        <HiOutlinePlusSm />
      </button>
    </div>
  );
};

export default InputQuantity;
