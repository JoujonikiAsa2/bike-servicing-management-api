import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { config } from "../config";
import httpStatus from "http-status";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  const statusCode = err?.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err?.message,
    stack: config.NODE_DEV === "development" && err?.stack,
  });
};
