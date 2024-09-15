import type { resProductsType, resProductType } from "@/types/resTypes";
import type { ProductProps } from "@/types/pagesProps";
import type { CSSProperties } from "react";
import { httpGET } from "@/utils/http";
import discountedPrice from "@/utils/discounted-price";
import modifiedDate from "@/utils/modifiedDate";
import ImageContainer from "@/components/ImageContainer";
import FormProduct from "@/components/FormProduct";
import { MdLocalShipping, MdKeyboardReturn } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import "../../../styles/Product.scss";

// The dynamic param not included in generateStaticParams will return a 404 page
export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await httpGET<resProductsType>(
    null,
    null,
    null,
    null,
    "1",
    "38"
  );
  const { products } = data as resProductsType;

  return products.map((product) => ({
    _id: product._id,
  }));
}

export default async function Product({ params }: ProductProps) {
  const { _id } = params;
  const data = await httpGET<resProductType>(
    null,
    null,
    null,
    null,
    "1",
    "1",
    _id
  );

  if ("status" in data && data.status > 400) {
    return <div>{data.message}</div>;
  }

  const { product } = data as resProductType;
  const {
    title,
    price,
    discountPercentage,
    images,
    rating,
    reviews,
    description,
    shippingInformation,
    warrantyInformation,
    returnPolicy,
  } = product;

  const isDiscount = discountPercentage > 8;

  return (
    <div className="Product">
      <section className="Product__container">
        <ImageContainer images={images} title={title} />
        <div className="Product__container__info">
          <h1 className="Product__container__info__title">{title}</h1>

          <div className="Product__container__info__rating-container">
            <div
              className="Product__container__info__rating-container__rating"
              style={{ "--rating": rating } as CSSProperties}
            ></div>
            <p className="Product__container__info__rating-container__reviews">
              {reviews.length} Reviews
            </p>
          </div>

          <div className="Product__container__info__price-container">
            <p
              className={`Product__container__info__price-container__price ${
                isDiscount ? "cut" : ""
              }`}
            >
              €{price}
            </p>
            {isDiscount && (
              <p className="Product__container__info__price-container__price">
                €{discountedPrice(price, discountPercentage)}
              </p>
            )}
          </div>

          <p>{description}</p>

          <FormProduct />

          <div className="Product__container__info__purchase-policies">
            <h2 className="Product__container__info__purchase-policies__title">
              Purchase Policies
            </h2>
            <div className="Product__container__info__purchase-policies__policy-container">
              <MdLocalShipping className="Product__container__info__purchase-policies__policy-container__icon" />
              <p>{shippingInformation}</p>
            </div>
            <div className="Product__container__info__purchase-policies__policy-container">
              <HiBadgeCheck className="Product__container__info__purchase-policies__policy-container__icon" />
              <p>{warrantyInformation}</p>
            </div>
            <div className="Product__container__info__purchase-policies__policy-container">
              <MdKeyboardReturn className="Product__container__info__purchase-policies__policy-container__icon" />
              <p>{returnPolicy}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Product__reviews">
        <h2 className="Product__reviews__title">Reviews</h2>
        <div className="Product__reviews__reviews-container">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="Product__reviews__reviews-container__review"
            >
              <div className="Product__reviews__reviews-container__review__name-date">
                <h3 className="Product__reviews__reviews-container__review__name-date__name">
                  {review.reviewerName}
                </h3>
                <p className="Product__reviews__reviews-container__review__name-date__date">
                  {modifiedDate(review.date)}
                </p>
              </div>
              <div
                className="Product__reviews__reviews-container__review__rating"
                style={{ "--rating": review.rating } as CSSProperties}
              />
              <p className="Product__reviews__reviews-container__review__text">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}