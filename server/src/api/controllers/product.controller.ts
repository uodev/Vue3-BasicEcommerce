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
  console.log("image: ", image);
  console.log("price: ", price);
  console.log("desc: ", desc);
  console.log("name: ", name);
  console.log("req.body: ", req.body);
  console.log("req.files: ", req.files);

  console.log(category);

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

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate("category");
  if (!product) throw new CustomError(StatusCode.NOT_FOUND, "ProductNotFound");
  product.views += 1;
  await product.save();
  sendHttpOk(res, product);
};

export const mostViwedProduct = async (req: Request, res: Response) => {
  const products = await Product.find()
    .sort({ views: -1 })
    .limit(4)
    .populate("category");
  sendHttpOk(res, products);
};

export const mostBoughtProduct = async (req: Request, res: Response) => {
  const products = await Product.find()
    .sort({ bought: -1 })
    .limit(4)
    .populate("category");
  sendHttpOk(res, products);
};

export const updateBought = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) throw new CustomError(StatusCode.NOT_FOUND, "ProductNotFound");
  product.bought += 1;
  await product.save();
  sendHttpNoContent(res);
};
