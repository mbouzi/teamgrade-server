-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Performance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "playerId" INTEGER NOT NULL,
    "matchId" INTEGER,
    CONSTRAINT "Performance_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Performance_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Performance" ("date", "id", "matchId", "playerId") SELECT "date", "id", "matchId", "playerId" FROM "Performance";
DROP TABLE "Performance";
ALTER TABLE "new_Performance" RENAME TO "Performance";
CREATE UNIQUE INDEX "Performance_playerId_matchId_key" ON "Performance"("playerId", "matchId");
CREATE TABLE "new_Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT,
    "lastname" TEXT NOT NULL,
    "age" INTEGER,
    "teamId" INTEGER NOT NULL,
    "countryId" INTEGER,
    CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Player_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Location" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Player" ("age", "countryId", "firstname", "id", "lastname", "teamId") SELECT "age", "countryId", "firstname", "id", "lastname", "teamId" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
CREATE UNIQUE INDEX "Player_firstname_lastname_countryId_teamId_key" ON "Player"("firstname", "lastname", "countryId", "teamId");
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "displayname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "locationId" INTEGER,
    CONSTRAINT "User_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("createdAt", "displayname", "email", "id", "locationId", "password", "username") SELECT "createdAt", "displayname", "email", "id", "locationId", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
