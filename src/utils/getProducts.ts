import { httpGET } from "@/utils/http";
import type { resErrorType, resProductsType } from "@/types/resTypes";

const getProducts = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    const responses = await Promise.all([
      httpGET<resProductsType>(),
      httpGET<resProductsType>("desc", "price"),
      httpGET<resProductsType>("desc", "discountPercentage"),
    ]);

    const resErr = responses.find((res) => "status" in res && res.status > 400);

    if (resErr) {
      throw resErr;
    }

    return responses as resProductsType[];
  } catch (error) {
    console.error(error);
    return error as resErrorType;
  }
};

export default getProducts;
