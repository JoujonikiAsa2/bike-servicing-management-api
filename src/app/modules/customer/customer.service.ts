import prisma from "../../../shared/prisma";
import { Customer } from "./customer.interface";

const createCustomer = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });

  return result;
};

export const CustomerService = {
  createCustomer,
};
