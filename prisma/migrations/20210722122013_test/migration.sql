-- DropForeignKey
ALTER TABLE "Promo" DROP CONSTRAINT "Promo_campusId_fkey";

-- AddForeignKey
ALTER TABLE "Promo" ADD FOREIGN KEY ("campusId") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
