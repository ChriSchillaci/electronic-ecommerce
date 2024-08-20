import mongoose from "mongoose";
import { SchemaProduct } from "../types/schemaTypes";

const productSchema = new mongoose.Schema<SchemaProduct>({
  title: {
    type: String,
    default: "Product Name",
  },
  description: {
    type: String,
    default: "Description Text",
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  tags: {
    type: [String],
  },
  brand: {
    type: String,
  },
  sku: {
    type: String,
  },
  weight: {
    type: Number,
  },
  dimensions: {
    type: {
      width: Number,
      height: Number,
      depth: Number,
    },
  },
  warrantyInformation: {
    type: String,
  },
  shippingInformation: {
    type: String,
  },
  availabilityStatus: {
    type: String,
  },
  reviews: {
    type: [
      {
        rating: Number,
        comment: String,
        date: String,
        reviewerName: String,
        reviewerEmail: String,
      },
    ],
  },
  returnPolicy: {
    type: String,
  },
  minimumOrderQuantity: {
    type: Number,
  },
  images: {
    type: [String],
  },
  thumbnail: {
    type: String,
  },
});

const Product =
  mongoose.models.Product ||
  mongoose.model<SchemaProduct>("Product", productSchema);

export default Product;
