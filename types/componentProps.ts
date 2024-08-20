import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { SchemaProduct } from "./schemaTypes";

interface DropDownProps {
  isDropDown: boolean;
  setIsDropDown: Dispatch<SetStateAction<boolean>>;
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

export type { CarouselCardsProps, CardProps, PaginationProps, DropDownProps };
