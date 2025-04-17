/*
  Warnings:

  - The values [PENDING,IN_PROGRESS,DONE] on the enum `ServiceStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `serviceDate` on the `service_records` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ServiceStatus_new" AS ENUM ('pending', 'in-progress', 'done');
ALTER TABLE "service_records" ALTER COLUMN "status" TYPE "ServiceStatus_new" USING ("status"::text::"ServiceStatus_new");
ALTER TYPE "ServiceStatus" RENAME TO "ServiceStatus_old";
ALTER TYPE "ServiceStatus_new" RENAME TO "ServiceStatus";
DROP TYPE "ServiceStatus_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "service_records" DROP CONSTRAINT "service_records_bikeId_fkey";

-- DropIndex
DROP INDEX "bikes_customerId_key";

-- DropIndex
DROP INDEX "service_records_bikeId_key";

-- AlterTable
ALTER TABLE "service_records" DROP COLUMN "serviceDate";

-- AddForeignKey
ALTER TABLE "service_records" ADD CONSTRAINT "service_records_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bikes"("bikeId") ON DELETE CASCADE ON UPDATE CASCADE;
