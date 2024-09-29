import type { resCartProductType } from "@/types/resTypes";
import CartProduct from "@/components/CartProduct";
import Checkout from "@/components/Checkout";
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
      <div className="CartPage__products-container">
        {cart_products.length ? (
          cart_products.map((cart_product) => (
            <CartProduct
              key={cart_product.id}
              cart_product={cart_product}
              userId={session?.user?.id}
            />
          ))
        ) : (
          <h2 className="CartPage__products-container__empty-cart">
            The cart is empty
          </h2>
        )}
      </div>
      <Checkout />
    </div>
  );
}
