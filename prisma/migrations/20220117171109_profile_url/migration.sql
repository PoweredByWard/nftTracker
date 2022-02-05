-- AlterTable
ALTER TABLE "TwitterAccount" ADD COLUMN     "profile_url" TEXT NOT NULL DEFAULT E'',
ALTER COLUMN "banner_url" SET DEFAULT E'';
