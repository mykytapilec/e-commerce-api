import { Request, Response } from "express";
import * as productService from "../services/product.service";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.json(product);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getProducts = async (_req: Request, res: Response) => {
  const products = await productService.getProducts();
  res.json(products);
};

export const getProduct = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const product = await productService.getProductById(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  await productService.deleteProduct(id);
  res.json({ message: "Deleted" });
};