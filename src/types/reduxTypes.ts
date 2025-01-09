import type { Session } from "next-auth";
import type { SchemaCartProduct } from "@/types/schemaTypes";

interface UserStateType {
  user: Session | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  cart_products: SchemaCartProduct[];
  checkout: {
    subResult: number;
    taxResult: number;
    totalPrice: number;
  };
  totalQuantity: number;
  isModal: boolean;
  isToast: boolean;
  message: string | null;
}

interface UserCartProdType {
  userId: string | undefined;
  id: string;
  cart: SchemaCartProduct[];
}

interface UserCartProdDataType {
  userId: string;
  userCartProdData: SchemaCartProduct;
}

export type { UserStateType, UserCartProdType, UserCartProdDataType };
