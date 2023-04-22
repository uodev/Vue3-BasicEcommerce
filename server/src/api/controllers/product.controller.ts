import { Response, Request } from "express";
import Product from "../../domain/models/product.model";
import {
  sendHttpCreated,
  sendHttpNoContent,
  sendHttpOk,
} from "../../infrastructure/utils/response/sendHttpResponse";
import { CustomError } from "../../infrastructure/utils/errors/customError";
import { StatusCode } from "../../infrastructure/utils/response/statusCode";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const addProduct = async (req: Request, res: Response) => {
  const { name, desc, price, category } = req.body;
  const image = req.files?.image as any;

  const result = await cloudinary.uploader.upload(image.tempFilePath, {
    folder: "products",
    use_filename: true,
    unique_filename: false,
  });
  if (!result)
    throw new CustomError(StatusCode.BAD_REQUEST, "ImageUploadFailed");
  const product = new Product({
    name,
    desc,
    image: result.secure_url,
    price,
    category,
  });
  await product.save();
  fs.unlinkSync(image.tempFilePath);

  sendHttpCreated(res, product);
};

export const getAllProduct = async (req: Request, res: Response) => {
  const products = await Product.find().populate("category");
  sendHttpOk(res, products);
};
