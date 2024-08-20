import type { CategoryType, SortByType, SortType } from "../types/queryTypes";
import type { resErrorType, resProductType } from "../types/resTypes";

const httpGET = async (
  sort?: SortType,
  sortBy?: SortByType,
  search?: string | null,
  category?: CategoryType,
  page = "1"
): Promise<resProductType | resErrorType> => {
  let statusNum = 500;
  try {
    let url = `/api/data?page=${encodeURIComponent(page)}`;

    if (category) {
      url += `&category=${encodeURIComponent(category)}`;
    }

    if (sort && sortBy) {
      url += `&sort=${encodeURIComponent(sort)}&sortby=${encodeURIComponent(sortBy)}`;
    }

    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }

    console.log("URL ==>", url);

    const res = await fetch(url);

    console.log("RESPONSE", res);

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
      message: "An error occurred",
    };
  }
};

export { httpGET }