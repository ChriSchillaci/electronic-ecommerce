import type { Dispatch, SetStateAction } from "react";

const handleQuantityValue = (
  type: "prev" | "next",
  setQuantityValue: Dispatch<SetStateAction<number>>
) => {
  if (type === "prev") {
    setQuantityValue((prev) => prev - 1);
    return;
  }

  setQuantityValue((prev) => prev + 1);
};

export default handleQuantityValue;
