import type { Dispatch, MutableRefObject, SetStateAction } from "react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { SchemaProduct } from "./schemaTypes";

interface DropDownProps {
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

export type {
  CarouselCardsProps,
  CardProps,
  PaginationProps,
  DropDownProps,
  ImageContainerProps,
};
