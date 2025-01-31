import type { Metadata } from "next";
import CartProducts from "@/components/CartProducts";
import Checkout from "@/components/Checkout";
import Modal from "@/components/Modal";
import "../../styles/Cart.scss";

export const metadata: Metadata = {
  title: "Cart",
  description: "...",
};

export default async function Cart() {
  return (
    <>
      <div className="CartPage">
        <div className="CartPage__products-details">
          <h3 className="CartPage__products-details__product">Product</h3>
          <h3 className="CartPage__products-details__quantity">Quantity</h3>
          <h3 className="CartPage__products-details__price">Price</h3>
        </div>
        <CartProducts />
        <Checkout />
      </div>
      <Modal />
    </>
  );
}
