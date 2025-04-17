import prisma from "../../../shared/prisma";
import { IBike } from "./bike.interface";

const addBike = async (payload: IBike) => {
  const customer = await prisma.customer.findUnique({
    where: { customerId: payload.customerId },
  });

  if (!customer) {
    throw new Error("Customer does not exist!");
  }

  const result = await prisma.bike.create({
    data: payload,
  });

  return result;
};

const getAllBikes = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getBikeById = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  return result;
};

const updateBike = async (payload: Partial<IBike>, id: string) => {
  const result = await prisma.bike.update({
    where: {
      bikeId: id,
    },
    data: {},
  });
  return result;
};

const deleteBike = async (id: string) => {
  const result = await prisma.bike.delete({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const BikeService = {
  addBike,
  getAllBikes,
  getBikeById,
  updateBike,
  deleteBike,
};
