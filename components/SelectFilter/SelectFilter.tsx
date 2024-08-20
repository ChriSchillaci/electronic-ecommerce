"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import handleSort from "../../utils/handleSort";
import "./index.scss";

const SelectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <select
      className="SelectFilter"
      onChange={(e) => handleSort(e, pathname, searchParams, router)}
    >
      <option value={`sortby=&sort=`}>Default</option>
      <option value={`sortby=price&sort=desc`}>Price(highest)</option>
      <option value={`sortby=price&sort=asc`}>Price(lowest)</option>
      <option value={`sortby=rating&sort=desc`}>Rating(highest)</option>
      <option value={`sortby=rating&sort=asc`}>Rating(lowest)</option>
    </select>
  );
};

export default SelectFilter;
