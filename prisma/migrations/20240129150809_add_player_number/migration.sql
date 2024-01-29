/*
  Warnings:

  - A unique constraint covering the columns `[firstname,lastname,countryId,teamId,squadNumber]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `squadNumber` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Player_firstname_lastname_countryId_teamId_key";

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "squadNumber" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Player_firstname_lastname_countryId_teamId_squadNumber_key" ON "Player"("firstname", "lastname", "countryId", "teamId", "squadNumber");
