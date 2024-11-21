"use client";

import type { InputQuantityProps } from "@/types/componentProps";
import { useState, useEffect } from "react";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import handleQuantityValue from "@/utils/handleQuantityValue";
import { useAppDispatch } from "@/utils/redux-store/hooks";
import { updateCart } from "@/utils/redux-store/features/user/userSlice";
import "./index.scss";

const InputQuantity = ({
  classType = "",
  id,
  quantity = 1,
}: InputQuantityProps) => {
  const [quantityValue, setQuantityValue] = useState(quantity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(updateCart({ id, quantityValue }));
    }
  }, [quantityValue, id, dispatch]);

  useEffect(() => {
    setQuantityValue(quantity);
  }, [quantity]);

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
