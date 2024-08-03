import { MutableRefObject } from "react";
import Image from "next/image";
import { SchemaProduct } from "@/types/schemaTypes";
import discountedPrice from "@/utils/discounted-price";
import "./index.scss";

const Card = ({
  product,
  cardRef,
}: {
  product: SchemaProduct;
  cardRef: MutableRefObject<HTMLDivElement | null> | null;
}) => {
  const { _id, images, title, description, price, discountPercentage } =
    product;

  const isDiscount = discountPercentage > 8;

  return (
    <div id={_id} className="Card" ref={cardRef}>
      {isDiscount && <p className="Card__sale">Sale</p>}
      <Image
        className="Card__img"
        src={images[0]}
        alt={title}
        width={200}
        height={200}
      />
      <div className="Card__container">
        <h2 className="Card__container__title">{title}</h2>
        <p className="Card__container__description">{description}</p>
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
      </div>
    </div>
  );
};

export default Card;
