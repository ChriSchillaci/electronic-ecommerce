import type { FormEvent } from "react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { SchemaCartProduct } from "@/types/schemaTypes";
import type { resMessageType } from "@/types/resTypes";
import userCart from "./userCart";

const handleProductSubmit = async (
  e: FormEvent<HTMLFormElement>,
  userId: string | undefined,
  product: SchemaCartProduct,
  router: AppRouterInstance
) => {
  e.preventDefault();

  if (!userId) {
    return router.push("/login");
  }

  const { id, title, image, price } = product;

  const nativeEvent = e.nativeEvent as SubmitEvent;
  const idBtn = nativeEvent.submitter!.id;

  const form = new FormData(e.currentTarget);
  const formEntries = Object.fromEntries(form);

  const getFormData = {
    id,
    title,
    image,
    quantity: Number(formEntries.quantity),
    price,
  };

  const data = await userCart<resMessageType>("POST", userId, getFormData);

  console.log(data.message);

  if (idBtn === "buy-btn") {
    router.push("/cart");
    router.refresh();
  }
};

export default handleProductSubmit;
