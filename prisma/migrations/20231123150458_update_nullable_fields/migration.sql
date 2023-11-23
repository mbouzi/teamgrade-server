-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT,
    "lastname" TEXT NOT NULL,
    "age" INTEGER,
    "teamId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Player_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Location" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Player" ("age", "countryId", "firstname", "id", "lastname", "teamId") SELECT "age", "countryId", "firstname", "id", "lastname", "teamId" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
CREATE UNIQUE INDEX "Player_firstname_lastname_countryId_teamId_key" ON "Player"("firstname", "lastname", "countryId", "teamId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
