/*
  Warnings:

  - You are about to drop the column `promoId` on the `Session` table. All the data in the column will be lost.
  - Added the required column `sessionId` to the `Promo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_promoId_fkey";

-- AlterTable
ALTER TABLE "Promo" ADD COLUMN     "sessionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "promoId";

-- AddForeignKey
ALTER TABLE "Promo" ADD FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
