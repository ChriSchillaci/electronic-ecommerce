import type { SortType, SortByType } from "@/types/sortTypes";
import type { resProductType, resErrorType } from "@/types/resTypes";

const httpGET = async (
  sort?: SortType,
  sortBy?: SortByType | "discountPercentage",
  page = "1"
): Promise<resProductType | resErrorType> => {
  let statusNum = 500;
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
