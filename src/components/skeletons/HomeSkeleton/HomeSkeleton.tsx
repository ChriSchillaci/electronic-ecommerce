import blankCards from "@/mocks/blankCards";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./index.scss";

const HomeSkeleton = () => {
  return (
    <section className="CarouselList">
      <div className="CarouselCards">
        <h1 className="CarouselCards__title skeleton"></h1>
        <div className="CarouselContainer">
          <button className={`carousel-btn`}>
            <MdChevronLeft className="carousel-btn__icon" />
          </button>
          <div className="carousel">
            {blankCards.map((card, idx) => {
              return (
                <div key={idx} className="Card skeleton">
                  <div className="Card__img skeleton"></div>
                  <div className="Card__container skeleton">
                    <h2 className="Card__container__title skeleton">
                      {card.text}
                    </h2>
                    <p className="Card__container__description skeleton"></p>
                    <p className="Card__container__description skeleton"></p>
                    <div className="price-container skeleton">
                      <p className="price-container__price skeleton"></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className={`carousel-btn`}>
            <MdChevronRight className="carousel-btn__icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSkeleton;
