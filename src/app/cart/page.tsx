import type { resCartProductType } from "@/types/resTypes";
import CartProducts from "@/components/CartProducts";
import userCart from "@/utils/userCart";
import Checkout from "@/components/Checkout";
import { auth } from "../auth";
import Modal from "@/components/Modal";
import "../../styles/Cart.scss";

export default async function Cart() {
  const session = await auth();

  const cart = await userCart<resCartProductType>("GET", session?.user?.id);

  const { cart_products } = cart as resCartProductType;

  return (
    <>
      <div className="CartPage">
        <div className="CartPage__products-details">
          <h3 className="CartPage__products-details__product">Product</h3>
          <h3 className="CartPage__products-details__quantity">Quantity</h3>
          <h3 className="CartPage__products-details__price">Price</h3>
        </div>
        <CartProducts cart_products={cart_products} />
        <Checkout />
      </div>
      <Modal />
    </>
  );
}
