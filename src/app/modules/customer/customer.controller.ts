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

export const CustomerController = {
  createCustomer,
};
