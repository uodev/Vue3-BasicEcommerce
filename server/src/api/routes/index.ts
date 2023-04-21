import { Router } from "express";
import productRoute from "./all/product.route";
import categoryRoute from "./all/category.route";
const router = Router();

router.use("/products", productRoute);
router.use("/categories", categoryRoute);

export default router;
