-- DropForeignKey
ALTER TABLE "bikes" DROP CONSTRAINT "bikes_customerId_fkey";

-- AddForeignKey
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;
