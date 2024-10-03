import { httpGET } from "@/utils/http";
import type { resMessageType, resProductsType } from "@/types/resTypes";

const getProducts = async () => {
  try {
    const responses = await Promise.all([
      httpGET<resProductsType>(),
      httpGET<resProductsType>("desc", "price"),
      httpGET<resProductsType>("desc", "discountPercentage"),
    ]);

    const resErr = responses.find(
      (res) => "status" in res && res.status && res.status >= 400
    );

    if (resErr) {
      throw resErr;
    }

    return responses as resProductsType[];
  } catch (error) {
    console.error(error);
    return error as resMessageType;
  }
};

export default getProducts;
