/*
  Warnings:

  - The `repeat` column on the `Quest` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "QuestRepeat" AS ENUM ('NONE', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- AlterTable
ALTER TABLE "Quest" DROP COLUMN "repeat",
ADD COLUMN     "repeat" "QuestRepeat" NOT NULL DEFAULT 'NONE';
