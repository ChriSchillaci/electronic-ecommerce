import type { SchemaProduct } from "./schemaTypes";
import type { PaginationProps } from "./componentProps";

interface resProductsType extends PaginationProps {
  products: SchemaProduct[];
}

interface resProductType {
  product: SchemaProduct;
}

interface resErrorType {
  message: string;
  status: number;
}

export type { resProductsType, resProductType, resErrorType };
