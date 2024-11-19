import type { UserStateType } from "@/types/reduxTypes";
import type { WritableDraft } from "immer";

const handleCartQuantity = (state: WritableDraft<UserStateType>) => {
  const getQuantities = state.cart_products.map((product) => product.quantity);

  const getTotalQuantity = getQuantities.reduce((acc, item) => acc + item, 0);

  state.totalQuantity = getTotalQuantity;
};

export default handleCartQuantity;
