import { Response } from "express";

export const sendResponse = (
  res: Response,
  jsonData: {
    statusCode: number;
    success: boolean;
    message: string;
    data: any;
  }
) => {
  const { statusCode, success, message, data } = jsonData;
  res.status(statusCode).json({
    success,
    message,
    data,
  });
};
