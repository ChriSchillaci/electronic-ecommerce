import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";

const handleSearchForm = (
  e: FormEvent<HTMLFormElement>,
  search: string,
  router: AppRouterInstance
) => {
  e.preventDefault();
  router.push(`/store?search=${search}`);
};

export default handleSearchForm;
