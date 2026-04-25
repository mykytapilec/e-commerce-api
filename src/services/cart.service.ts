import { prisma } from "../utils/prisma";

export const addToCart = async (userId: string, productId: string) => {
  const existing = await prisma.cartItem.findFirst({
    where: { userId, productId },
  });

  if (existing) {
    return prisma.cartItem.update({
      where: { id: existing.id },
      data: { quantity: existing.quantity + 1 },
    });
  }

  return prisma.cartItem.create({
    data: { userId, productId },
  });
};

export const getCart = async (userId: string) => {
  return prisma.cartItem.findMany({
    where: { userId },
    include: { product: true },
  });
};

export const removeFromCart = async (userId: string, productId: string) => {
  const item = await prisma.cartItem.findFirst({
    where: { userId, productId },
  });

  if (!item) {
    throw new Error("Item not found in cart");
  }

  return prisma.cartItem.delete({
    where: { id: item.id },
  });
};