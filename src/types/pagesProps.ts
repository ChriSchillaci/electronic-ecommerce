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

interface ParamsProp {
  params: { id: string };
}

export type { StoreProps, ParamsProp };
