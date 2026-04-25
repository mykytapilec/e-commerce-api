import { Router } from "express";
import * as cartController from "../controllers/cart.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.post("/add", cartController.addToCart);
router.get("/", cartController.getCart);
router.delete("/remove", cartController.removeFromCart);

export default router;