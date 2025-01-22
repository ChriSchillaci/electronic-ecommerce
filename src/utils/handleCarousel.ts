import type { Dispatch, MutableRefObject, SetStateAction } from "react";

const handleCarousel = (
  type: "prev" | "next",
  carousel: MutableRefObject<HTMLDivElement | null>,
  setIsBtnClicked: Dispatch<SetStateAction<boolean>>
) => {
  if (carousel.current) {
    if (type === "prev") {
      carousel.current.scrollBy({ left: -260 });
    } else {
      carousel.current.scrollBy({ left: 260 });
    }
    setIsBtnClicked((prev) => !prev);
  }
};

export default handleCarousel;
