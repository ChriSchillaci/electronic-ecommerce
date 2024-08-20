import type { SchemaProduct } from "./schemaTypes";
import type { PaginationProps } from "./componentProps";

interface resProductType extends PaginationProps {
  products: SchemaProduct[];
}

interface resErrorType {
  message: string;
  status: number;
}

export type { resProductType, resErrorType };
