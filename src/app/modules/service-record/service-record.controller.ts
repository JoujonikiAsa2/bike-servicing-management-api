import { asyncWrapper } from "../../../shared/asyncWrapper";
import prisma from "../../../shared/prisma";
import { sendResponse } from "../../../shared/sendResponse";
import { ServiceRecordService } from "./service-record.service";
import httpStatus from "http-status";

const addServiceRecord = asyncWrapper(async (req, res) => {
  const result = await ServiceRecordService.addServiceRecord(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServiceRecords = asyncWrapper(async (req, res) => {
  const result = await ServiceRecordService.getAllServiceRecords();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getServiceRecordById = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceRecordService.getServiceRecordById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});


const markAsComplete = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceRecordService.markAsComplete(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

export const ServiceRecordController = {
  addServiceRecord,
  getAllServiceRecords,
  getServiceRecordById,
  markAsComplete,
};
