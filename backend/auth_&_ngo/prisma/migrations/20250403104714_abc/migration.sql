/*
  Warnings:

  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_NGO_id_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_clientBookId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_donorBookId_fkey";

-- DropTable
DROP TABLE "Transaction";

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
