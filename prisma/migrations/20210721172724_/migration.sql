/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Campus` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Campus.name_unique" ON "Campus"("name");
