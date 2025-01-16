interface SchemaProduct {
  _id?: string;
  id: string;
  title: string;
  description: string;
  category: "smartphones" | "mobile-accessories" | "tablets" | "laptops";
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  images: string[];
  thumbnail: string;
}

interface SchemaUser {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

interface SchemaCartProduct {
  id: string;
  title: string;
  image: string;
  quantity: number;
  price: number;
}

type ModifiedProductType = {
  _id: string;
  [key: string]: SchemaProduct[keyof SchemaProduct];
};

export type {
  SchemaProduct,
  SchemaUser,
  SchemaCartProduct,
  ModifiedProductType,
};
