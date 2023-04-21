import { Schema, model } from "mongoose";

interface Category {
  name: string;
  categoryImage: string;
}

const categorySchema = new Schema<Category>({
  name: {
    type: String,
    required: true,
  },
  categoryImage: {
    type: String,
    required: true,
  },
});

const Category = model<Category>("Category", categorySchema);

export default Category;
