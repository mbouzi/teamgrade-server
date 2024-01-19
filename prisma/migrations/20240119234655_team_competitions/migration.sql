-- CreateTable
CREATE TABLE "_TeamCompetitions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TeamCompetitions_AB_unique" ON "_TeamCompetitions"("A", "B");

-- CreateIndex
CREATE INDEX "_TeamCompetitions_B_index" ON "_TeamCompetitions"("B");

-- AddForeignKey
ALTER TABLE "_TeamCompetitions" ADD CONSTRAINT "_TeamCompetitions_A_fkey" FOREIGN KEY ("A") REFERENCES "Competition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamCompetitions" ADD CONSTRAINT "_TeamCompetitions_B_fkey" FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
