import {Request, Response, NextFunction } from "express";
import httpstatus from "http-status";

export const apiNotFoundHandler = (req:Request, res:Response, next:NextFunction) => {
  res.status(httpstatus.NOT_FOUND).json({
    success: false,
    message: "API not found",
    stack: req.originalUrl,
  });
};
