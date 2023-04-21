import { Response, Request } from "express";
import Category from "../../domain/models/category.model";
import {
  sendHttpCreated,
  sendHttpOk,
} from "../../infrastructure/utils/response/sendHttpResponse";
import { CustomError } from "../../infrastructure/utils/errors/customError";
import { StatusCode } from "../../infrastructure/utils/response/statusCode";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  const image = req.files?.image as any;
  const result = await cloudinary.uploader.upload(image.tempFilePath, {
    folder: "products",
    use_filename: true,
    unique_filename: false,
  });
  if (!result)
    throw new CustomError(StatusCode.BAD_REQUEST, "ImageUploadFailed");

  const category = await Category.create({
    name,
    categoryImage: result.secure_url,
  });
  fs.unlinkSync(image.tempFilePath);
  sendHttpCreated(res, category);
};

export const getAllCategory = async (req: Request, res: Response) => {
  const categories = await Category.find();
  sendHttpOk(res, categories);
};
