import type { SchemaProduct, SchemaCartProduct } from "./schemaTypes";
import type { PaginationProps } from "./componentProps";

interface resProductsType extends PaginationProps {
  products: SchemaProduct[];
}

interface resProductType {
  product: SchemaProduct;
}

interface resCartProductType {
  cart_products: SchemaCartProduct[];
}
interface resMessageType {
  message: string;
  status?: number;
}

export type {
  resProductsType,
  resProductType,
  resMessageType,
  resCartProductType,
};
