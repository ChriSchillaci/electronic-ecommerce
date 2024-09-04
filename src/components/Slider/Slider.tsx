"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { sliderImages } from "@/mocks/sliderImages";
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
      <div className="Slider__info">
        <h1 className="slider-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
          quia?
        </h1>
        <Link className="slider-btn" href={"/store"}>
          Shop Now
        </Link>
      </div>
      <div className="Slider__gradient"></div>
    </section>
  );
};

export default Slider;
