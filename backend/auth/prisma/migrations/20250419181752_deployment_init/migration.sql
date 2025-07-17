/*
  Warnings:

  - You are about to drop the column `password` on the `UserInfo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[keycloakId]` on the table `UserInfo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `keycloakId` to the `UserInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserInfo" DROP COLUMN "password",
ADD COLUMN     "keycloakId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_keycloakId_key" ON "UserInfo"("keycloakId");
