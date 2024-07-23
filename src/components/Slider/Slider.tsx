"use client";

import Image from "next/image";
import { sliderImages } from "@/mocks/sliderImages";
import { useState, useEffect, useRef } from "react";
import "./index.scss";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const timerId = useRef<undefined | number>(undefined);

  useEffect(() => {
    timerId.current = window.setInterval(() => {
      index === 3 ? setIndex(0) : setIndex((prev) => prev + 1);
    }, 5000);

    return () => {
      if (timerId !== undefined) {
        window.clearInterval(timerId.current);
      }
    };
  }, [index]);

  return (
    <section className="Slider">
      {sliderImages.map((image, idx) => (
        <Image
          key={idx}
          className={`Slider__img ${index === idx ? "active" : ""}`}
          src={`/images/${image}`}
          alt="img"
          width={1000}
          height={1000}
        />
      ))}
    </section>
  );
};

export default Slider;
