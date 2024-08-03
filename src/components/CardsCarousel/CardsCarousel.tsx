import type { CardsCarouselProps } from "@/types/componentProps";
import CarouselContainer from "../CarouselContainer";
import "./index.scss";

const CardsCarousel = ({ products, title }: CardsCarouselProps) => {
  return (
    <div className="CardsCarousel">
      <h1 className="CardsCarousel__title">{title}</h1>
      <CarouselContainer products={products} />
    </div>
  );
};

export default CardsCarousel;
