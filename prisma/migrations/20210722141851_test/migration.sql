-- DropForeignKey
ALTER TABLE "Promo" DROP CONSTRAINT "Promo_sessionId_fkey";

-- AddForeignKey
ALTER TABLE "Promo" ADD FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
