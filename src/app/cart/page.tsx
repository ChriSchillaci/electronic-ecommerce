import type { resCartProductType } from "@/types/resTypes";
import CartProductsAndCheckout from "@/components/CartProductsAndCheckout";
import userCart from "@/utils/userCart";
import { auth } from "../auth";
import "../../styles/Cart.scss";

export default async function Cart() {
  const session = await auth();

  const cart = await userCart<resCartProductType>("GET", session?.user?.id);

  const { cart_products } = cart as resCartProductType;

  return (
    <div className="CartPage">
      <div className="CartPage__products-details">
        <h3 className="CartPage__products-details__product">Product</h3>
        <h3 className="CartPage__products-details__quantity">Quantity</h3>
        <h3 className="CartPage__products-details__price">Price</h3>
      </div>
      <CartProductsAndCheckout
        cart_products={cart_products}
        session={session}
      />
    </div>
  );
}
