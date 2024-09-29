"use client";

import type { CartProductProps } from "@/types/componentProps";
import handleDeleteProduct from "@/utils/handleDeleteProduct";
import InputQuantity from "../InputQuantity";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import "./index.scss";

const CartProduct = ({ cart_product, userId }: CartProductProps) => {
  const router = useRouter();
  const { id, title, image, quantity, price } = cart_product;

  return (
    <div id={id} className="CartProduct">
      <Image
        className="CartProduct__img"
        src={image}
        alt="img"
        width={120}
        height={120}
      />
      <h3 className="CartProduct__title">{title}</h3>
      <InputQuantity classType="Cart" quantity={quantity} />
      <h3 className="CartProduct__price">${price}</h3>
      <RxCross1
        className="CartProduct__icon"
        onClick={() => handleDeleteProduct(userId, id, router)}
      />
    </div>
  );
};

export default CartProduct;
