-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "streetName" TEXT,
    "streetNumber" TEXT,
    "postalCode" TEXT,
    "recipient" TEXT,
    "additionalAddress1" TEXT,
    "additionalAddress2" TEXT
);
