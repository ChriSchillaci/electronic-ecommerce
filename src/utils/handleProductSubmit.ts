import type { FormEvent } from "react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { SchemaCartProduct } from "@/types/schemaTypes";
import type { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import type { UserStateType } from "@/types/reduxTypes";
import type { Dispatch } from "@reduxjs/toolkit";
import { fetchAddProd } from "./redux-store/features/user/userSlice";
import { handleToast } from "./redux-store/features/user/userSlice";

const handleProductSubmit = async (
  e: FormEvent<HTMLFormElement>,
  userId: string | undefined,
  product: Omit<SchemaCartProduct, "quantity">,
  router: AppRouterInstance,
  dispatch: ThunkDispatch<
    {
      user: UserStateType;
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>
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

  const userCartProdData = {
    id,
    title,
    image,
    quantity: Number(formEntries.quantity),
    price,
  };

  await dispatch(fetchAddProd({ userId, userCartProdData }));

  if (idBtn === "buy-btn") {
    router.push("/cart");
    router.refresh();
    return;
  }

  dispatch(handleToast(true));
  router.refresh();
};

export default handleProductSubmit;
