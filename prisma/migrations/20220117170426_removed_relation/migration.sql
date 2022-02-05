/*
  Warnings:

  - You are about to drop the column `userId` on the `TwitterAccount` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TwitterAccount" DROP CONSTRAINT "TwitterAccount_userId_fkey";

-- AlterTable
ALTER TABLE "TwitterAccount" DROP COLUMN "userId";
