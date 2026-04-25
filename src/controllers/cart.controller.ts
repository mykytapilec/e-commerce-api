import { Request, Response } from "express";
import * as cartService from "../services/cart.service";

export const addToCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { productId } = req.body;

    const item = await cartService.addToCart(userId, productId);
    res.json(item);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getCart = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  const cart = await cartService.getCart(userId);
  res.json(cart);
};

export const removeFromCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { productId } = req.body;

    await cartService.removeFromCart(userId, productId);
    res.json({ message: "Removed" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};