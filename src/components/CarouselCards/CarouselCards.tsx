import type { CarouselCardsProps } from "@/types/componentProps";
import CarouselContainer from "../CarouselContainer";
import "./index.scss";

const CarouselCards = ({ products, title }: CarouselCardsProps) => {
  const splitTitle = title.split(" ");

  return (
    <section className="CarouselCards">
      <div className="CarouselCards__title-container">
        <h1 className="CarouselCards__title-container__title">
          {splitTitle[0]}
          <span className="CarouselCards__title-container__title__highlight">
            {" "}
            {splitTitle[1]}
          </span>
        </h1>
        <div className="CarouselCards__title-container__line"></div>
      </div>
      <CarouselContainer products={products} />
    </section>
  );
};

export default CarouselCards;
