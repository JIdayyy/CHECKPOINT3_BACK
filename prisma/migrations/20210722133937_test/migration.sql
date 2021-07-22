/*
  Warnings:

  - Added the required column `campusId` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Made the column `birthdate` on table `Instructor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "campusId" TEXT NOT NULL,
ALTER COLUMN "birthdate" SET NOT NULL,
ALTER COLUMN "birthdate" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Instructor" ADD FOREIGN KEY ("campusId") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
