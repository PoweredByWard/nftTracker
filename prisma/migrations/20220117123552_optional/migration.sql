/*
  Warnings:

  - You are about to drop the column `following_count` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "following_count",
ADD COLUMN     "friends_count" INTEGER,
ALTER COLUMN "banner_url" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "followers_count" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "screen_name" DROP NOT NULL,
ALTER COLUMN "verified" DROP NOT NULL;
