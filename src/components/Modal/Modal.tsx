"use client";

import { useAppSelector } from "@/utils/redux-store/hooks";
import { useAppDispatch } from "@/utils/redux-store/hooks";
import { handleModal } from "@/utils/redux-store/features/user/userSlice";
import handleCheckoutSubmit from "@/utils/handleCheckoutSubmit";
import { useRouter } from "next/navigation";
import "./index.scss";

const Modal = () => {
  const { loading, isModal } = useAppSelector((state) => state.user);
  const userId = useAppSelector((state) => state.user.user?.user?.id);
  const message = useAppSelector((state) => state.user.message);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className={`Modal ${isModal ? "active" : ""}`}>
      <div className={`Modal__container ${isModal ? "active" : ""}`}>
        {loading === "pending" ? (
          <h2>loading</h2>
        ) : (
          <h2 className="Modal__container__message">{message}</h2>
        )}
        <div className="Modal__container__btns">
          {loading === "idle" && (
            <>
              <button
                className="Modal__container__btns__btn"
                onClick={() => dispatch(handleModal())}
              >
                No
              </button>
              <button
                className="Modal__container__btns__btn"
                onClick={() => handleCheckoutSubmit(userId, dispatch, router)}
              >
                Yes
              </button>
            </>
          )}
          {loading === "succeeded" && (
            <>
              <button
                className="Modal__container__btns__btn"
                onClick={() => dispatch(handleModal())}
              >
                Close
              </button>
            </>
          )}

          {loading === "failed" && (
            <>
              <button
                className="Modal__container__btns__btn"
                onClick={() => dispatch(handleModal())}
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
