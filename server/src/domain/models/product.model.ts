import { Schema, SchemaDefinitionProperty, model } from "mongoose";

interface Product {
  name: string;
  desc: string;
  image: string;
  price: number;
  category: SchemaDefinitionProperty<string> | undefined;
  views: number;
  bought: number;
}

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  views: {
    type: Number,
    default: 0,
  },
  bought: {
    type: Number,
    default: 0,
  },
});

const Product = model<Product>("Product", productSchema);

export default Product;
