import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { SchemaCartProduct } from "@/types/schemaTypes";
import type { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import type { UserStateType } from "@/types/reduxTypes";
import type { Dispatch, SetStateAction } from "react";
import { fetchDeleteCartProd } from "./redux-store/features/user/userSlice";

const handleDeleteProduct = async (
  userId: string | undefined,
  id: string,
  router: AppRouterInstance,
  cart: SchemaCartProduct[],
  setIsPending: Dispatch<SetStateAction<boolean>>,
  dispatch: ThunkDispatch<
    {
      user: UserStateType;
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>
) => {
  setIsPending(true);
  await dispatch(
    fetchDeleteCartProd({
      userId,
      id,
      cart,
    })
  );
  setIsPending(false);
  router.refresh();
};

export default handleDeleteProduct;
