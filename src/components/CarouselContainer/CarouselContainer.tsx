"use client";

import type { resProductsType } from "@/types/resTypes";
import { useRef, useEffect, useState } from "react";
import handleCarousel from "@/utils/handleCarousel";
import handleHorizScroll from "@/utils/handleHorizScroll";
import Card from "../Card";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./index.scss";

const CarouselContainer = ({ products }: resProductsType) => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isFirstCardVisible, setIsFirstCardVisible] = useState(false);
  const [isLastCardVisible, setIsLastCardVisible] = useState(false);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const lastCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const firstCardElement = firstCardRef.current;
    const lastCardElement = lastCardRef.current;

    if (!carouselElement || !firstCardElement || !lastCardElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === firstCardElement) {
            setIsFirstCardVisible(entry.isIntersecting);
          }

          if (entry.target === lastCardElement) {
            setIsLastCardVisible(entry.isIntersecting);
          }
        });
      },
      {
        root: carouselElement,
        threshold: 1,
      }
    );

    observer.observe(firstCardElement);
    observer.observe(lastCardElement);

    carouselElement.addEventListener("wheel", (e) =>
      handleHorizScroll(e, carouselElement)
    );

    return () => {
      observer.unobserve(firstCardElement);
      observer.unobserve(lastCardElement);

      carouselElement.removeEventListener("wheel", (e) =>
        handleHorizScroll(e, carouselElement)
      );
    };
  }, [isBtnClicked]);

  return (
    <div className="CarouselContainer">
      <button
        className={`CarouselContainer__btn`}
        onClick={() => handleCarousel("prev", carouselRef, setIsBtnClicked)}
        disabled={isFirstCardVisible}
        aria-label="previous"
      >
        <MdChevronLeft className="CarouselContainer__btn__icon" />
      </button>

      <div className="CarouselContainer__carousel" ref={carouselRef}>
        {products.map((product, idx) => {
          const cardRef =
            idx === products.length - 1
              ? lastCardRef
              : idx === 0
              ? firstCardRef
              : null;

          return <Card key={idx} product={product} cardRef={cardRef} />;
        })}
      </div>

      <button
        className={`CarouselContainer__btn`}
        onClick={() => handleCarousel("next", carouselRef, setIsBtnClicked)}
        disabled={isLastCardVisible}
        aria-label="next"
      >
        <MdChevronRight className="CarouselContainer__btn__icon" />
      </button>

      <div className="CarouselContainer__mobile-btns">
        <button
          className={`CarouselContainer__btn`}
          onClick={() => handleCarousel("prev", carouselRef, setIsBtnClicked)}
          disabled={isFirstCardVisible}
          aria-label="previous"
        >
          <MdChevronLeft className="CarouselContainer__btn__icon" />
        </button>
        <button
          className={`CarouselContainer__btn`}
          onClick={() => handleCarousel("next", carouselRef, setIsBtnClicked)}
          disabled={isLastCardVisible}
          aria-label="next"
        >
          <MdChevronRight className="CarouselContainer__btn__icon" />
        </button>
      </div>
    </div>
  );
};

export default CarouselContainer;
