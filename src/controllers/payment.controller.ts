import { Request, Response } from "express";
import * as paymentService from "../services/payment.service";

export const checkout = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;

    const url = await paymentService.createCheckoutSession(userId);

    res.json({ url });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};