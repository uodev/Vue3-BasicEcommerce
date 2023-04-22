import { Router } from "express";
import {
  addProduct,
  getAllProduct,
} from "../../controllers/product.controller";
import { errorWrapper } from "../../middlewares/errors/errorHandling";

const router = Router();

router.post("/", errorWrapper(addProduct));
router.get("/", errorWrapper(getAllProduct));

export default router;
