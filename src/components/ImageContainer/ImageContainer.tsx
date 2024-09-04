"use client";

import type { ImageContainerProps } from "@/types/componentProps";
import { useState } from "react";
import Image from "next/image";
import "./index.scss";

const ImageContainer = ({ images, title }: ImageContainerProps) => {
  const [changeImage, setChangeImage] = useState(images[0]);
  return (
    <div className="ImageContainer">
      <Image
        className="ImageContainer__img"
        src={changeImage}
        alt={title}
        width={400}
        height={400}
      />

      <div className="ImageContainer__images">
        {images.map((image, idx) => (
          <Image
            key={idx}
            className={`ImageContainer__images__img ${
              changeImage === image ? "active" : ""
            }`}
            src={image}
            alt={title}
            width={100}
            height={100}
            onClick={() => setChangeImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
