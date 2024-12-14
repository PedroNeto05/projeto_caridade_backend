-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DonationItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "donationId" INTEGER NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "DonationItem_donationId_fkey" FOREIGN KEY ("donationId") REFERENCES "Donation" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_DonationItem" ("created_at", "description", "donationId", "id", "quantity", "type", "updated_at") SELECT "created_at", "description", "donationId", "id", "quantity", "type", "updated_at" FROM "DonationItem";
DROP TABLE "DonationItem";
ALTER TABLE "new_DonationItem" RENAME TO "DonationItem";
CREATE INDEX "DonationItem_donationId_idx" ON "DonationItem"("donationId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
