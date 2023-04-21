import { Router } from "express";
import {
  addProduct,
  getAllProduct,
  getProductById,
  mostBoughtProduct,
  mostViwedProduct,
  updateBought,
} from "../../controllers/product.controller";
import { errorWrapper } from "../../middlewares/errors/errorHandling";

const router = Router();

router.post("/", errorWrapper(addProduct));
router.get("/", errorWrapper(getAllProduct));
router.get("/most-viewed", errorWrapper(mostViwedProduct));
router.get("/most-bought", errorWrapper(mostBoughtProduct));
router.get("/:id", errorWrapper(getProductById));
router.post("/:id", errorWrapper(updateBought));

export default router;
