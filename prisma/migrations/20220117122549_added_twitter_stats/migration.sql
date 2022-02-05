/*
  Warnings:

  - Added the required column `banner_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followers_count` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following_count` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `screen_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verified` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "banner_url" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "followers_count" INTEGER NOT NULL,
ADD COLUMN     "following_count" INTEGER NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "screen_name" TEXT NOT NULL,
ADD COLUMN     "verified" BOOLEAN NOT NULL;
