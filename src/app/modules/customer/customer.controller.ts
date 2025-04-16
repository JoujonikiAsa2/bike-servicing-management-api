import { Request, Response } from "express";
import { asyncWrapper } from "../../../shared/asyncWrapper";
import { sendResponse } from "../../../shared/sendResponse";
import { CustomerService } from "./customer.service";
import httpStatus from "http-status";

const createCustomer = asyncWrapper(async (req, res) => {
    const result = await CustomerService.createCustomer(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Customer created successfully",
      data: result,
    });
});

const getAllCustomers = asyncWrapper(async (req, res) => {
    const result = await CustomerService.getAllCustomers();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Customers fetched successfully",
      data: result,
    });
});

const getCustomerById = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const result = await CustomerService.getCustomerById(id);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Customer fetched successfully",
      data: result,
    });
});

export const CustomerController = {
  createCustomer,
  getAllCustomers,
  getCustomerById
};
