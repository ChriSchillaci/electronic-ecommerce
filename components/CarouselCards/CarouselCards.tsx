import type { CarouselCardsProps } from "../../types/componentProps";
import CarouselContainer from "../CarouselContainer";
import "./index.scss";

const CarouselCards = ({ products, title }: CarouselCardsProps) => {
  return (
    <div className="CarouselCards">
      <h1 className="CarouselCards__title">{title}</h1>
      <CarouselContainer products={products} />
    </div>
  );
};

export default CarouselCards;
