/*
  Warnings:

  - A unique constraint covering the columns `[date,id]` on the table `Concert` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Concert_date_id_key" ON "Concert"("date", "id");
