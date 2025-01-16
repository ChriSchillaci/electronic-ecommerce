import { ReactNode } from "react";
import type { Dispatch, MutableRefObject, SetStateAction } from "react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { SchemaCartProduct, SchemaProduct } from "./schemaTypes";
import type { Session } from "next-auth";
import type { resCartProductType, resMessageType } from "./resTypes";

interface LayoutClientProps {
  children: ReactNode;
  session: Session | null;
  cart: resCartProductType | resMessageType;
}

interface NavBarProps {
  session: Session | null;
}
interface DropDownProps extends NavBarProps {
  isDropDown: boolean;
  setIsDropDown: Dispatch<SetStateAction<boolean>>;
  isCategoryList: boolean;
  setIsCategoryList: Dispatch<SetStateAction<boolean>>;
  router: AppRouterInstance;
}

interface CarouselCardsProps {
  products: SchemaProduct[];
  title: string;
}

interface CardProps {
  product: SchemaProduct;
  cardRef: MutableRefObject<HTMLDivElement | null> | null;
  classType?: string;
}

interface PaginationProps {
  meta?: {
    currentPage: number;
    itemCount: number;
    totalItems: number;
    totalPages: number;
  };
}

interface ImageContainerProps {
  images: string[];
  title: string;
}

interface CredFormProps {
  btnText: string;
}

interface AuthLogoutBtnProps {
  classType?: string;
  setIsDropDown?: Dispatch<SetStateAction<boolean>>;
  setIsCategoryList?: Dispatch<SetStateAction<boolean>>;
}

interface FormProductProps {
  userId: string | undefined;
  _id: string;
  title: string;
  image: string;
  price: number;
}

interface InputQuantityProps {
  classType?: string;
  id?: string;
  quantity?: number;
}

interface CartProductProps {
  clientCartProd: SchemaCartProduct;
}

interface CheckoutProps {
  clientCardProds?: SchemaCartProduct[];
}

export type {
  LayoutClientProps,
  NavBarProps,
  CarouselCardsProps,
  CardProps,
  PaginationProps,
  DropDownProps,
  ImageContainerProps,
  CredFormProps,
  AuthLogoutBtnProps,
  FormProductProps,
  InputQuantityProps,
  CartProductProps,
  CheckoutProps,
};
