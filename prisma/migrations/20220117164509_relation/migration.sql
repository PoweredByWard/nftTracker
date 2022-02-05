/*
  Warnings:

  - Added the required column `userId` to the `TwitterAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TwitterAccount" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TwitterAccount" ADD CONSTRAINT "TwitterAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
