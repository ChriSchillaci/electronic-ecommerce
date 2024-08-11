import { MutableRefObject } from "react";
import type { SchemaProduct } from "./schemaTypes";

interface CarouselCardsProps {
  products: SchemaProduct[];
  title: string;
}

interface CardProps {
  product: SchemaProduct;
  cardRef: MutableRefObject<HTMLDivElement | null> | null;
}

export type { CarouselCardsProps, CardProps };
