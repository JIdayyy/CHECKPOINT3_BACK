/*
  Warnings:

  - Added the required column `campusId` to the `Promo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Promo" ADD COLUMN     "campusId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Promo" ADD FOREIGN KEY ("campusId") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
