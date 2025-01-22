import type { CartProductProps } from "@/types/componentProps";
import handleDeleteProduct from "@/utils/handleDeleteProduct";
import InputQuantity from "../InputQuantity";
import Image from "next/image";
import Link from "next/link";
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
      <Link className="CartProduct__img-container" href={`/store/${id}`}>
        <Image
          className="CartProduct__img-container__img"
          src={image}
          alt="img"
          width={120}
          height={120}
        />
      </Link>
      <Link
        className="CartProduct__title-container__title"
        href={`/store/${id}`}
      >
        <h3 className="CartProduct__title">{title}</h3>
      </Link>

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
