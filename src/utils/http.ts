import { revalidatePath } from "next/cache";
import type { SortType, SortByType, CategoryType } from "@/types/queryTypes";
import type { resProductType, resErrorType } from "@/types/resTypes";

const httpGET = async (
  sort?: SortType,
  sortBy?: SortByType,
  search?: string | null,
  category?: CategoryType,
  page = "1"
): Promise<resProductType | resErrorType> => {
  let statusNum = 500;
  revalidatePath("/store");
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data`);

    if (page) {
      url.searchParams.append("page", page);
    }

    if (category) {
      url.searchParams.append("category", category);
    }

    if (sort && sortBy) {
      url.searchParams.append("sort", sort);
      url.searchParams.append("sortby", sortBy);
    }

    if (search) {
      url.searchParams.append("search", search);
    }

    const res = await fetch(url);

    if (!res.ok) {
      statusNum = res.status;
      throw new Error(`Error status ${res.status}`);
    }

    const data: resProductType = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: statusNum,
        message: error.message,
      };
    }

    return {
      status: statusNum,
      message: "An error occured",
    };
  }
};

export { httpGET };
