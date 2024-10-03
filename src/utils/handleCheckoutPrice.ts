import type { SchemaCartProduct } from "@/types/schemaTypes";

const handleCheckoutPrice = (clientCardProds: SchemaCartProduct[]) => {
  const tax = 10;

  const totalProductPrice = clientCardProds.map(
    (product) => product.price * product.quantity
  );

  const subResult = totalProductPrice.reduce((acc, item) => acc + item, 0);

  const taxResult = (subResult * tax) / 100;

  const totalPrice = subResult + taxResult;

  return {
    subResult: Number(subResult.toFixed(2)),
    taxResult: Number(taxResult.toFixed(2)),
    totalPrice: Number(totalPrice.toFixed(2)),
  };
};

export default handleCheckoutPrice;
