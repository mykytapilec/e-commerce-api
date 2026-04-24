import { prisma } from "../utils/prisma";

export const createProduct = async (data: {
  name: string;
  description?: string;
  price: number;
  stock: number;
}) => {
  return prisma.product.create({ data });
};

export const getProducts = async () => {
  return prisma.product.findMany();
};

export const getProductById = async (id: string) => {
  return prisma.product.findUnique({
    where: { id },
  });
};

export const deleteProduct = async (id: string) => {
  return prisma.product.delete({
    where: { id },
  });
};