/*
  Warnings:

  - A unique constraint covering the columns `[name,createdById]` on the table `Community` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Community_name_createdById_key" ON "Community"("name", "createdById");
