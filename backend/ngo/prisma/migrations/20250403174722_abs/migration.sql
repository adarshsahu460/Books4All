/*
  Warnings:

  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `UserInfo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_NGO_id_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_clientBookId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_donorBookId_fkey";

-- AlterTable
ALTER TABLE "UserInfo" DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL;

-- DropTable
DROP TABLE "Transaction";

-- DropEnum
DROP TYPE "Status";

-- DropEnum
DROP TYPE "UserType";

-- CreateTable
CREATE TABLE "Rewards" (
    "id" SERIAL NOT NULL,
    "D_id" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Rewards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionTable" (
    "id" SERIAL NOT NULL,
    "donorBookId" INTEGER NOT NULL,
    "clientBookId" INTEGER NOT NULL,
    "NGO_id" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "TransactionTable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TransactionTable" ADD CONSTRAINT "TransactionTable_NGO_id_fkey" FOREIGN KEY ("NGO_id") REFERENCES "UserInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionTable" ADD CONSTRAINT "TransactionTable_donorBookId_fkey" FOREIGN KEY ("donorBookId") REFERENCES "DonorBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionTable" ADD CONSTRAINT "TransactionTable_clientBookId_fkey" FOREIGN KEY ("clientBookId") REFERENCES "ClientBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
