"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const config_1 = require("../config");
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || http_status_1.default.INTERNAL_SERVER_ERROR;
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: err === null || err === void 0 ? void 0 : err.message,
        stack: config_1.config.NODE_DEV === "development" && (err === null || err === void 0 ? void 0 : err.stack),
    });
};
exports.globalErrorHandler = globalErrorHandler;
