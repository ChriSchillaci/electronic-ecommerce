import type { Dispatch, SetStateAction } from "react";

const handleQuantityValue = (
  type: "prev" | "next",
  setQuantityValue: Dispatch<SetStateAction<number>>
) => {
  setQuantityValue((prev) => (type === "prev" ? prev - 1 : prev + 1));
};

export default handleQuantityValue;
