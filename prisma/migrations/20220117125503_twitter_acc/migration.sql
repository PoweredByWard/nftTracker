/*
  Warnings:

  - You are about to drop the column `banner_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `followers_count` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `friends_count` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `screen_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "banner_url",
DROP COLUMN "description",
DROP COLUMN "followers_count",
DROP COLUMN "friends_count",
DROP COLUMN "location",
DROP COLUMN "screen_name",
DROP COLUMN "verified";

-- CreateTable
CREATE TABLE "TwitterAccount" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "screen_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "followers_count" INTEGER NOT NULL,
    "following_count" INTEGER NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "banner_url" TEXT NOT NULL,

    CONSTRAINT "TwitterAccount_pkey" PRIMARY KEY ("id")
);
