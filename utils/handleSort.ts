import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const handleSort = (
  e: ChangeEvent<HTMLSelectElement>,
  pathname: string,
  searchParams: ReadonlyURLSearchParams,
  router: AppRouterInstance
) => {
  const { value } = e.target;

  const url = new URL(
    `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }${pathname}?${searchParams.toString()}`
  );

  const urlSearchParams = new URLSearchParams(value);

  urlSearchParams.forEach((keyValue, key) => {
    if (!keyValue) {
      return url.searchParams.delete(key);
    }
    url.searchParams.set(key, keyValue);
  });

  router.push(url.toString());
};

export default handleSort;
