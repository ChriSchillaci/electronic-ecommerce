import type { Dispatch } from "react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import type { UserStateType } from "@/types/reduxTypes";
import { fetchPurchaseProds } from "./redux-store/features/user/userSlice";
import {
  handleToast,
  handleModal,
} from "./redux-store/features/user/userSlice";

const handleCheckoutSubmit = async (
  userId: string | undefined,
  dispatch: ThunkDispatch<
    {
      user: UserStateType;
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>,
  router: AppRouterInstance
) => {
  dispatch(handleModal());
  await dispatch(fetchPurchaseProds(userId));
  dispatch(handleToast(true));
  router.refresh();
};

export default handleCheckoutSubmit;
