/*
  Warnings:

  - Added the required column `serviceDate` to the `service_records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service_records" ADD COLUMN     "serviceDate" TIMESTAMP(3) NOT NULL;
