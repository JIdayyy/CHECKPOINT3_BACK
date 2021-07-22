/*
  Warnings:

  - You are about to drop the column `sessionId` on the `Promo` table. All the data in the column will be lost.
  - Added the required column `promoId` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Promo" DROP CONSTRAINT "Promo_sessionId_fkey";

-- AlterTable
ALTER TABLE "Promo" DROP COLUMN "sessionId";

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "promoId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Session" ADD FOREIGN KEY ("promoId") REFERENCES "Promo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
