import { httpGET } from "../../utils/http";
import Card from "../../components/Card";
import SelectFilter from "../../components/SelectFilter";
import Pagination from "../../components/Pagination";
import SideBar from "../../components/SideBar";
import type { resProductType } from "../../types/resTypes";
import type { StoreProps } from "../../types/pagesProps";
import "../../styles/Store.scss";

export default async function Store({ searchParams }: StoreProps) {
  const sort = searchParams?.sort ?? null;
  const sortby = searchParams?.sortby ?? null;
  const search = searchParams?.search ?? null;
  const category = searchParams?.category ?? null;
  const page = searchParams?.page ?? "1";

  const data = await httpGET(sort, sortby, search, category, page);
  const { products, meta } = data as resProductType;

  return (
    <div className="Store">
      <SideBar />
      {/* START */}
      <div className="Store__main-container">
        <div className="sort-container--category-title">
          <h1 className="category-title">
            {searchParams?.category === null || !searchParams?.category
              ? "all products"
              : searchParams?.category}
          </h1>
          <div className="sort-container">
            <p>Sort by:</p>
            <SelectFilter />
          </div>
        </div>
        <div className="Store__main-container__products">
          {products.map((product) => (
            <Card
              key={product._id}
              product={product}
              cardRef={null}
              classType="Card__Store"
            />
          ))}
        </div>
        <Pagination meta={meta} />
      </div>
      {/* END */}
    </div>
  );
}
