import { ServiceStatus } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";
import { IServiceRecord } from "./service-record.interface";

const addServiceRecord = async (payload: IServiceRecord) => {
  const result = await prisma.serviceRecord.create({
    data: { ...payload, status: payload.status as ServiceStatus },
  });

  return result;
};

const getAllServiceRecords = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getServiceRecordById = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id ,
    },
  });
  return result;
};

const markAsComplete = async (id: string) => {
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id ,
    },
    data: {
      completionDate: new Date(),
      status: ServiceStatus.done,
    },
  });
  return result;
};

export const ServiceRecordService = {
  addServiceRecord,
  getAllServiceRecords,
  getServiceRecordById,
  markAsComplete,
};
