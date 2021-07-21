/*
  Warnings:

  - You are about to drop the `PromoHasUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PromoHasUsers" DROP CONSTRAINT "PromoHasUsers_promoId_fkey";

-- DropForeignKey
ALTER TABLE "PromoHasUsers" DROP CONSTRAINT "PromoHasUsers_userId_fkey";

-- DropTable
DROP TABLE "PromoHasUsers";

-- CreateTable
CREATE TABLE "Comment" (
    "userId" TEXT NOT NULL,
    "promoId" TEXT NOT NULL,
    "body" TEXT,
    "picture" TEXT,

    PRIMARY KEY ("userId","promoId")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("promoId") REFERENCES "Promo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
