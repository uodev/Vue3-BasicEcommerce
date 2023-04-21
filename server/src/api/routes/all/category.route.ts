import { Router } from "express";
import {
  createCategory,
  getAllCategory,
} from "../../controllers/category.controller";
import { errorWrapper } from "../../middlewares/errors/errorHandling";

const router = Router();

router.post("/", errorWrapper(createCategory));
router.get("/", errorWrapper(getAllCategory));

export default router;
