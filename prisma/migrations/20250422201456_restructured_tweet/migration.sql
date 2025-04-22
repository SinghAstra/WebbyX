/*
  Warnings:

  - You are about to drop the column `thread` on the `Tweet` table. All the data in the column will be lost.
  - Made the column `content` on table `Tweet` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "thread",
ALTER COLUMN "content" SET NOT NULL;
