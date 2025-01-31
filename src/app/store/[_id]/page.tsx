import type { resProductsType, resProductType } from "@/types/resTypes";
import type { ParamsPromise } from "@/types/pagesProps";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { auth } from "@/app/auth";
import { httpGET } from "@/utils/http";
import Link from "next/link";
import { notFound } from "next/navigation";
import discountedPrice from "@/utils/discounted-price";
import modifiedDate from "@/utils/modifiedDate";
import ImageContainer from "@/components/ImageContainer";
import FormProduct from "@/components/FormProduct";
import { MdLocalShipping, MdKeyboardReturn } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import "../../../styles/Product.scss";

export async function generateMetadata({
  params,
}: ParamsPromise): Promise<Metadata> {
  const { _id } = await params;

  const data = await httpGET<resProductType>(
    null,
    null,
    null,
    null,
    "1",
    "1",
    _id
  );

  const { product } = data as resProductType;

  if (!product) {
    return {
      title: "Product",
    };
  }

  return {
    title: product.title,
  };
}

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

export default async function Product({ params }: ParamsPromise) {
  const session = await auth();

  const { _id } = await params;
  const data = await httpGET<resProductType>(
    null,
    null,
    null,
    null,
    "1",
    "1",
    _id
  );

  const { product } = data as resProductType;

  if (!product) {
    notFound();
  }

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
  const discountPrice = discountedPrice(price, discountPercentage);

  return (
    <div id={_id} className="Product">
      <section className="Product__container">
        <ImageContainer images={images} title={title} />
        <div className="Product__container__info">
          <h1 className="Product__container__info__title">{title}</h1>

          <div className="Product__container__info__rating-container">
            <span>{rating}</span>
            <div
              className="Product__container__info__rating-container__rating"
              style={{ "--rating": rating } as CSSProperties}
            ></div>
            <Link
              href={"#reviews"}
              className="Product__container__info__rating-container__reviews"
            >
              {`(${reviews.length})`}
            </Link>
          </div>

          <div className="Product__container__info__price-container">
            {isDiscount && (
              <span className="Product__container__info__price-container__price">
                €{discountPrice}
              </span>
            )}

            <span
              className={`Product__container__info__price-container__price ${
                isDiscount ? "cut" : ""
              }`}
            >
              €{price}
            </span>
          </div>

          <p>{description}</p>

          <FormProduct
            userId={session?.user?.id}
            _id={_id}
            title={title}
            image={images[0]}
            price={isDiscount ? discountPrice : price}
          />

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

      <section id="reviews" className="Product__reviews">
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
