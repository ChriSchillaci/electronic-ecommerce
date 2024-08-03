"use client";
import { useRef, useEffect, useState } from "react";
import handleCarousel from "@/utils/handleCarousel";
import type { resProductType } from "@/types/resTypes";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "../Card";
import "./index.scss";

const CarouselContainer = ({ products }: resProductType) => {
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
        threshold: 0.9,
      }
    );

    observer.observe(firstCardElement);
    observer.observe(lastCardElement);

    return () => {
      observer.unobserve(firstCardElement);
      observer.unobserve(lastCardElement);
    };
  }, [isBtnClicked]);

  return (
    <div className="CarouselContainer">
      <button
        className={`carousel-btn ${isFirstCardVisible ? "hidden" : ""}`}
        onClick={() => handleCarousel("prev", carouselRef, setIsBtnClicked)}
      >
        <MdChevronLeft className="carousel-btn__icon" />
      </button>
      <div className="carousel" ref={carouselRef}>
        {products.map((product, idx) => {
          const cardRef =
            idx === products.length - 1
              ? lastCardRef
              : idx === 0
              ? firstCardRef
              : null;

          return <Card key={product._id} product={product} cardRef={cardRef} />;
        })}
      </div>
      <button
        className={`carousel-btn ${isLastCardVisible ? "hidden" : ""}`}
        onClick={() => handleCarousel("next", carouselRef, setIsBtnClicked)}
      >
        <MdChevronRight className="carousel-btn__icon" />
      </button>
    </div>
  );
};

export default CarouselContainer;
