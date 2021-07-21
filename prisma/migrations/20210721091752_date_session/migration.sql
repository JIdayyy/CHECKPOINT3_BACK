/*
  Warnings:

  - You are about to drop the column `end` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `Session` table. All the data in the column will be lost.
  - Added the required column `picture` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "picture" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "end",
DROP COLUMN "start",
ADD COLUMN     "date" TEXT NOT NULL;
