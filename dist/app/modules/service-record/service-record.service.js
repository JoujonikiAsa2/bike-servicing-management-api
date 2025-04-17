"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma_2 = __importDefault(require("../../../shared/prisma"));
const addServiceRecord = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.create({
        data: Object.assign(Object.assign({}, payload), { status: payload.status }),
    });
    return result;
});
const getAllServiceRecords = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.findMany();
    return result;
});
const getServiceRecordById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const markAsComplete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            completionDate: new Date(),
            status: prisma_1.ServiceStatus.done,
        },
    });
    return result;
});
const getPendingServiceRecords = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_2.default.serviceRecord.findMany({
        where: {
            status: {
                in: [prisma_1.ServiceStatus.pending, prisma_1.ServiceStatus.in_progress],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    return result;
});
exports.ServiceRecordService = {
    addServiceRecord,
    getAllServiceRecords,
    getServiceRecordById,
    markAsComplete,
    getPendingServiceRecords,
};
