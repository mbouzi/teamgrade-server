/*
  Warnings:

  - A unique constraint covering the columns `[performanceId,userId,playerId,communityId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Rating_performanceId_userId_playerId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Rating_performanceId_userId_playerId_communityId_key" ON "Rating"("performanceId", "userId", "playerId", "communityId");
