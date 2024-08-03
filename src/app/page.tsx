import CardsCarousel from "@/components/CardsCarousel";
import { httpGET } from "@/utils/http";
import categoryImages from "@/mocks/categoryImages";
import Image from "next/image";
import "../styles/page.scss";

const getProducts = async () => {
  const res = await Promise.all([
    httpGET(),
    httpGET("desc", "price"),
    httpGET("desc", "discountPercentage"),
  ]);

  return res;
};

export default async function Home() {
  const data = await getProducts();

  const [featuredProducts, popularProducts, saleProducts] = data;

  return (
    <div className="Home">
      <section className="carousel-list--categories">
        {featuredProducts !== null && (
          <CardsCarousel
            title={"Featured Products"}
            products={featuredProducts.products}
          />
        )}
        {popularProducts !== null && (
          <CardsCarousel
            title={"Popular Products"}
            products={popularProducts.products}
          />
        )}
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
        {saleProducts !== null && (
          <CardsCarousel title={"On Sale"} products={saleProducts.products} />
        )}
      </section>
    </div>
  );
}
