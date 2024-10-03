import type { resMessageType } from "@/types/resTypes";
import type { SchemaCartProduct } from "@/types/schemaTypes";

const userCart = async <T>(
  method: "GET" | "POST" | "PUT",
  userId: string | undefined,
  cartProductData?: SchemaCartProduct,
  id?: string
): Promise<T | resMessageType> => {
  let statusNumber = 500;
  try {
    if (!userId) {
      statusNumber = 400;
      throw new Error("userId invalid");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${userId}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body:
          method === "POST" && cartProductData
            ? JSON.stringify(cartProductData)
            : method === "PUT" && id
            ? JSON.stringify({ id })
            : null,
      }
    );

    if (res.status >= 400) {
      const errData: resMessageType = await res.json();
      statusNumber = res.status;
      throw new Error(errData.message);
    }

    const data: T = await res.json();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      return { message: err.message, status: statusNumber } as resMessageType;
    }
  }
  return {
    message: "Something unexpected happened",
    status: statusNumber,
  };
};

export default userCart;
