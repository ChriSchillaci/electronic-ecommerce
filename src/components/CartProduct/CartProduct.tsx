import type { CartProductProps } from "@/types/componentProps";
import handleDeleteProduct from "@/utils/handleDeleteProduct";
import InputQuantity from "../InputQuantity";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "@/utils/redux-store/hooks";
import { useState } from "react";
import "./index.scss";

const CartProduct = ({ clientCartProd }: CartProductProps) => {
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();
  const userId = useAppSelector((state) => state.user.user?.user?.id);
  const cart = useAppSelector((state) => state.user.cart_products);
  const dispatch = useAppDispatch();
  const { id, title, image, quantity, price } = clientCartProd;

  return (
    <li id={id} className={`CartProduct ${isPending ? "active" : ""}`}>
      <Image
        className="CartProduct__img"
        src={image}
        alt="img"
        width={120}
        height={120}
      />
      <h3 className="CartProduct__title">{title}</h3>
      <InputQuantity classType="Cart" id={id} quantity={quantity} />
      <h3 className="CartProduct__price">${price}</h3>
      <button
        className="CartProduct__icon"
        disabled={isPending}
        onClick={() =>
          handleDeleteProduct(userId, id, router, cart, setIsPending, dispatch)
        }
        aria-label="Delete product"
      >
        <RxCross1 />
      </button>
    </li>
  );
};

export default CartProduct;
