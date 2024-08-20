import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

const handlePagination = (
  type: "prev" | "next",
  currentPage: number | undefined,
  pathname: string,
  searchParams: ReadonlyURLSearchParams,
  router: AppRouterInstance
) => {
  const url = new URL(
    `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }${pathname}?${searchParams.toString()}`
  );

  if (type === "prev" && currentPage) {
    url.searchParams.set("page", (currentPage - 1).toString());
  }

  if (type === "next" && currentPage) {
    url.searchParams.set("page", (currentPage + 1).toString());
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  router.push(url.toString(), { scroll: false });
};

export default handlePagination;
