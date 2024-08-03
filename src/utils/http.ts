import type { SortType, SortByType } from "@/types/sortTypes";
import type { resProductType } from "@/types/resTypes";

const httpGET = async (
  sort?: SortType,
  sortBy?: SortByType | "discountPercentage",
  page = "1"
): Promise<resProductType> => {
  const url = new URL("http://localhost:3000/api/data");

  if (page) {
    url.searchParams.append("page", page);
  }

  if (sort && sortBy) {
    url.searchParams.append("sort", sort);
    url.searchParams.append("sortby", sortBy);
  }

  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export { httpGET };
