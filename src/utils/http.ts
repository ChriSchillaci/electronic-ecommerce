import type { SortType, SortByType } from "@/types/sortTypes";
import type { resProductType } from "@/types/resTypes";

const httpGET = async (
  sort?: SortType,
  sortBy?: SortByType | "discountPercentage",
  page = "1"
): Promise<resProductType | null> => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data`);

    if (page) {
      url.searchParams.append("page", page);
    }

    if (sort && sortBy) {
      url.searchParams.append("sort", sort);
      url.searchParams.append("sortby", sortBy);
    }

    const res = await fetch(url);

    if (!res.ok) {
      console.log("fetch failed");
      return null;
    }

    const data: resProductType = await res.json();

    return data;
  } catch (error) {
    return null;
  }
};

export { httpGET };
