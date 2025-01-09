import { useRef, useEffect } from "react";
import { useAppSelector } from "@/utils/redux-store/hooks";
import { useAppDispatch } from "@/utils/redux-store/hooks";
import { handleToast } from "@/utils/redux-store/features/user/userSlice";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineCheckCircle, MdOutlineErrorOutline } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import "./index.scss";

const Toast = () => {
  const { isToast, message, loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toastElement = toastRef.current;

    const handleAnimationEnd = () => {
      dispatch(handleToast(false));
    };

    if (toastElement) {
      toastElement.addEventListener("animationend", handleAnimationEnd);

      return () => {
        toastElement.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, [dispatch]);

  return (
    <div ref={toastRef} className={`Toast ${isToast ? "active" : ""}`}>
      {loading === "pending" && <AiOutlineLoading className="Toast__pending" />}
      {loading === "succeeded" && (
        <MdOutlineCheckCircle className="Toast__check" />
      )}
      {loading === "failed" && (
        <MdOutlineErrorOutline className="Toast__error" />
      )}
      <p>{message}</p>
      <button
        onClick={() => dispatch(handleToast(false))}
        aria-label="Close toast"
      >
        <RxCross1 className="Toast__cross" />
      </button>
      <div className={`Toast__timer ${isToast ? "active" : ""}`} />
    </div>
  );
};

export default Toast;
