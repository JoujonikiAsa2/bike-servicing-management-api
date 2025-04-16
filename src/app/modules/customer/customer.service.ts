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

export const CustomerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
};
