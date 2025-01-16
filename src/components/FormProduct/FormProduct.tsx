"use client";

import type { FormProductProps } from "@/types/componentProps";
import handleProductSubmit from "@/utils/handleProductSubmit";
import InputQuantity from "../InputQuantity";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/utils/redux-store/hooks";
import "./index.scss";

const FormProduct = ({
  userId,
  _id,
  title,
  image,
  price,
}: FormProductProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <form
      className="FormProduct"
      onSubmit={(e) =>
        handleProductSubmit(
          e,
          userId,
          { id: _id, title, image, price },
          router,
          dispatch
        )
      }
    >
      <div className="FormProduct__quantity-container">
        <p className="FormProduct__quantity-container__text">Quantity</p>
        <InputQuantity />
      </div>
      <div className="FormProduct__btns-container">
        <button
          className="FormProduct__btns-container__btn"
          id="add-btn"
          type="submit"
        >
          Add to cart
        </button>
        <button
          className="FormProduct__btns-container__btn"
          id="buy-btn"
          type="submit"
        >
          Buy now
        </button>
      </div>
    </form>
  );
};

export default FormProduct;
