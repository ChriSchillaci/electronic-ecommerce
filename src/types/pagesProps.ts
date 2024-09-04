import type { SortType, SortByType, CategoryType } from "./queryTypes";

interface StoreProps {
  searchParams:
    | {
        sort: SortType;
        sortby: SortByType;
        search: string;
        category: CategoryType;
        page: string;
      }
    | undefined;
}

interface ProductProps {
  params: { _id: string };
}

export type { StoreProps, ProductProps };
