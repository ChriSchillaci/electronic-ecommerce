import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { resMessageType } from "@/types/resTypes";
import userCart from "./userCart";

const handleDeleteProduct = async (
  userId: string | undefined,
  id: string,
  router: AppRouterInstance
) => {
  await userCart<resMessageType>("PUT", userId, undefined, id);
  router.refresh();
};

export default handleDeleteProduct;
