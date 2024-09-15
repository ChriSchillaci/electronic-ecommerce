import type { SortType, SortByType, CategoryType } from "@/types/queryTypes";
import type { resErrorType } from "@/types/resTypes";

const httpGET = async <T>(
  sort?: SortType,
  sortBy?: SortByType,
  search?: string | null,
  category?: CategoryType,
  page = "1",
  limit = "9",
  _id = ""
): Promise<T | resErrorType> => {
  let statusNum = 500;
  try {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data/${_id}`
    );

    url.searchParams.append("page", page);

    url.searchParams.append("limit", limit);

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

    const data: T = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: statusNum,
        message: `${error.message} httpGET`,
      };
    }

    return {
      status: statusNum,
      message: "An error occurred",
    };
  }
};

export { httpGET };
