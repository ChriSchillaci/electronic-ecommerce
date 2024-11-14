import { useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, appDispatch, AppStore } from "./store";

export const useAppDispatch = useDispatch.withTypes<appDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
