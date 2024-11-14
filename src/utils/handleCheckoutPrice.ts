import type { UserStateType } from "@/types/reduxTypes";
import type { WritableDraft } from "immer";

const handleCheckoutPrice = (state: WritableDraft<UserStateType>) => {
  const tax = 10;

  const totalProductPrice = state.cart_products.map(
    (product) => product.price * product.quantity
  );

  const subResult = totalProductPrice.reduce((acc, item) => acc + item, 0);

  const taxResult = (subResult * tax) / 100;

  const totalPrice = subResult + taxResult;

  state.checkout = {
    subResult: Number(subResult.toFixed(2)),
    taxResult: Number(taxResult.toFixed(2)),
    totalPrice: Number(totalPrice.toFixed(2)),
  };
};

export default handleCheckoutPrice;
