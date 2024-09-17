import type { CardProps } from "@/types/componentProps";
import type { CSSProperties } from "react";
import Image from "next/image";
import discountedPrice from "@/utils/discounted-price";
import Link from "next/link";
import "./index.scss";

const Card = ({ product, cardRef, classType = "" }: CardProps) => {
  const { id, images, title, description, price, discountPercentage, rating } =
    product;

  const isDiscount = discountPercentage > 8;

  return (
    <div id={id} className={`Card ${classType}`} ref={cardRef}>
      <Link className="Card__link" href={`/store/${id}`}>
        {isDiscount && <p className="Card__link__sale">Sale</p>}
        <Image
          className="Card__link__img"
          src={images[0]}
          alt={title}
          width={200}
          height={200}
        />
        <div className="Card__link__container">
          <h2 className="Card__link__container__title">{title}</h2>
          <p className="Card__link__container__description">{description}</p>
          <div className="price-container">
            <p className={`price-container__price ${isDiscount ? "cut" : ""}`}>
              €{price}
            </p>
            {isDiscount && (
              <p className="price-container__discounted-price">
                €{discountedPrice(price, discountPercentage)}
              </p>
            )}
          </div>
          <div
            className="Card__link__container__rating"
            style={{ "--rating": rating } as CSSProperties}
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
