import { Router } from "express";
import * as productController from "../controllers/product.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authMiddleware, productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.delete("/:id", authMiddleware, productController.deleteProduct);

export default router;