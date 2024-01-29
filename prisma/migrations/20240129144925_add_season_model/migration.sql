/*
  Warnings:

  - You are about to drop the column `badge` on the `Team` table. All the data in the column will be lost.
  - Added the required column `seasonId` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seasonId` to the `Performance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seasonId` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Competition" DROP CONSTRAINT "Competition_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_stadiumId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_locationId_fkey";

-- AlterTable
ALTER TABLE "Competition" ALTER COLUMN "locationId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "seasonId" INTEGER NOT NULL,
ALTER COLUMN "locationId" DROP NOT NULL,
ALTER COLUMN "stadiumId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Performance" ADD COLUMN     "seasonId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Rating" ADD COLUMN     "seasonId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "badge",
ADD COLUMN     "badgeImg" TEXT,
ALTER COLUMN "locationId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Season" (
    "id" SERIAL NOT NULL,
    "startYear" TEXT NOT NULL,
    "endYear" TEXT NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlayerSeasons" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CompetitionToSeason" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityToSeason" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_SeasonToTeam" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Season_startYear_endYear_key" ON "Season"("startYear", "endYear");

-- CreateIndex
CREATE UNIQUE INDEX "_PlayerSeasons_AB_unique" ON "_PlayerSeasons"("A", "B");

-- CreateIndex
CREATE INDEX "_PlayerSeasons_B_index" ON "_PlayerSeasons"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CompetitionToSeason_AB_unique" ON "_CompetitionToSeason"("A", "B");

-- CreateIndex
CREATE INDEX "_CompetitionToSeason_B_index" ON "_CompetitionToSeason"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityToSeason_AB_unique" ON "_CommunityToSeason"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityToSeason_B_index" ON "_CommunityToSeason"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SeasonToTeam_AB_unique" ON "_SeasonToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_SeasonToTeam_B_index" ON "_SeasonToTeam"("B");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Performance" ADD CONSTRAINT "Performance_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_stadiumId_fkey" FOREIGN KEY ("stadiumId") REFERENCES "Stadium"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerSeasons" ADD CONSTRAINT "_PlayerSeasons_A_fkey" FOREIGN KEY ("A") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerSeasons" ADD CONSTRAINT "_PlayerSeasons_B_fkey" FOREIGN KEY ("B") REFERENCES "Season"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompetitionToSeason" ADD CONSTRAINT "_CompetitionToSeason_A_fkey" FOREIGN KEY ("A") REFERENCES "Competition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompetitionToSeason" ADD CONSTRAINT "_CompetitionToSeason_B_fkey" FOREIGN KEY ("B") REFERENCES "Season"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityToSeason" ADD CONSTRAINT "_CommunityToSeason_A_fkey" FOREIGN KEY ("A") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityToSeason" ADD CONSTRAINT "_CommunityToSeason_B_fkey" FOREIGN KEY ("B") REFERENCES "Season"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SeasonToTeam" ADD CONSTRAINT "_SeasonToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "Season"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SeasonToTeam" ADD CONSTRAINT "_SeasonToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
