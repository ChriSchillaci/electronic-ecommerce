import type { resProductsType } from "@/types/resTypes";
import getProducts from "@/utils/getProducts";
import categoryImages from "@/mocks/categoryImages";
import CarouselCards from "../CarouselCards";
import Image from "next/image";
import Link from "next/link";
import "./index.scss";

const CarouselList = async () => {
  const data = await getProducts();

  if ("status" in data && data.status && data.status > 400) {
    return <div>Something went wrong</div>;
  }

  const [featuredProducts, popularProducts, saleProducts] =
    data as resProductsType[];

  return (
    <>
      <CarouselCards
        title={"Featured Products"}
        products={featuredProducts.products}
      />
      <CarouselCards
        title={"Popular Products"}
        products={popularProducts.products}
      />
      <section className="categories-section">
        <div className="categories-section__container">
          {categoryImages.map((item, idx) => (
            <div key={idx} className="categories-section__container__box">
              <div className="categories-section__container__box__info">
                <h2 className="categories-section__container__box__info__title">
                  {item.text}
                </h2>
                <Link
                  href={`/store?category=${item.query}`}
                  className="categories-section__container__box__info__btn"
                >
                  Browse
                </Link>
              </div>
              <Image
                className="categories-section__container__box__img"
                src={item.img}
                alt="img"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </section>
      <CarouselCards title={"On Sale"} products={saleProducts.products} />
    </>
  );
};

export default CarouselList;
