/*
  Warnings:

  - You are about to drop the column `communityAverage` on the `Player` table. All the data in the column will be lost.
  - Added the required column `stadiumId` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Community" ADD COLUMN     "badge" TEXT;

-- AlterTable
ALTER TABLE "Competition" ADD COLUMN     "logo" TEXT;

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "stadiumId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "communityAverage",
ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "badge" TEXT;

-- CreateTable
CREATE TABLE "Stadium" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "Stadium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TeamStadium" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Stadium_name_locationId_key" ON "Stadium"("name", "locationId");

-- CreateIndex
CREATE UNIQUE INDEX "_TeamStadium_AB_unique" ON "_TeamStadium"("A", "B");

-- CreateIndex
CREATE INDEX "_TeamStadium_B_index" ON "_TeamStadium"("B");

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_stadiumId_fkey" FOREIGN KEY ("stadiumId") REFERENCES "Stadium"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stadium" ADD CONSTRAINT "Stadium_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamStadium" ADD CONSTRAINT "_TeamStadium_A_fkey" FOREIGN KEY ("A") REFERENCES "Stadium"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamStadium" ADD CONSTRAINT "_TeamStadium_B_fkey" FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
