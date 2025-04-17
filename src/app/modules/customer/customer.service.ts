import prisma from "../../../shared/prisma";
import { Customer } from "./customer.interface";

const createCustomer = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });

  return result;
};

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getCustomerById = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  return result;
};

const updateCustomer = async (payload: Partial<Customer>, id: string) => {
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });
  return result;
};

const deleteCustomer = async (id: string) => {
  const result = await prisma.$transaction(async (transactionClient) => {
    const deletedBike = await transactionClient.bike.delete({
      where: {
        customerId: id,
      },
    });

    await transactionClient.customer.delete({
      where: {
        customerId: deletedBike.customerId,
      },
    });
  });
  return result;
};

export const CustomerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
