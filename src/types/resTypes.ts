import type { SchemaProduct } from "./schemaTypes";

interface resProductType {
  products: SchemaProduct[];
}

interface resErrorType {
  message: string;
  status: number;
}

export type { resProductType, resErrorType };
