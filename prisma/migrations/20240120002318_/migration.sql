/*
  Warnings:

  - A unique constraint covering the columns `[date,hometeamId,awayteamId,competitionId]` on the table `Match` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Match_date_hometeamId_awayteamId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Match_date_hometeamId_awayteamId_competitionId_key" ON "Match"("date", "hometeamId", "awayteamId", "competitionId");
