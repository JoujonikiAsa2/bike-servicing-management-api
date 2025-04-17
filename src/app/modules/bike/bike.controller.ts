import { asyncWrapper } from "../../../shared/asyncWrapper";
import prisma from "../../../shared/prisma";
import { sendResponse } from "../../../shared/sendResponse";
import { BikeService } from "./bike.service";
import httpStatus from "http-status";

const addBike = asyncWrapper(async (req, res) => {
  const result = await BikeService.addBike(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  })
});

const getAllBikes = asyncWrapper(async (req, res) => {
  const result = await BikeService.getAllBikes();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  })
});

const getBikeById = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await BikeService.getBikeById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  })
});


export const BikeController = {
  addBike,
  getAllBikes,
  getBikeById,
};
