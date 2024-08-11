import getProducts from "@/utils/getProducts";
import categoryImages from "@/mocks/categoryImages";
import CarouselCards from "../CarouselCards";
import Image from "next/image";
import type { resProductType } from "@/types/resTypes";
import "./index.scss";

const CarouselList = async () => {
  const data = await getProducts();

  if ("status" in data && data.status > 400) {
    return <div>Something went wrong</div>;
  }

  const [featuredProducts, popularProducts, saleProducts] =
    data as resProductType[];

  return (
    <section className="CarouselList">
      <CarouselCards
        title={"Featured Products"}
        products={featuredProducts.products}
      />
      <CarouselCards
        title={"Popular Products"}
        products={popularProducts.products}
      />
      <div className="category-container">
        {categoryImages.map((item, idx) => (
          <div key={idx} className="category-box">
            <div className="category-info">
              <h1 className="category-title">{item.text}</h1>
              <button className="category-btn">Browse</button>
            </div>
            <Image
              className="category-img"
              src={item.img}
              alt="img"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
      <CarouselCards title={"On Sale"} products={saleProducts.products} />
    </section>
  );
};

export default CarouselList;
