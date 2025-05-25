/*
  Warnings:

  - You are about to drop the column `type` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `videoId` on the `Tweet` table. All the data in the column will be lost.
  - Added the required column `index` to the `Tweet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `threadId` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_videoId_fkey";

-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "type",
DROP COLUMN "videoId",
ADD COLUMN     "index" INTEGER NOT NULL,
ADD COLUMN     "threadId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "TweetType";

-- CreateTable
CREATE TABLE "TweetThread" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TweetThread_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TweetThread_videoId_key" ON "TweetThread"("videoId");

-- AddForeignKey
ALTER TABLE "TweetThread" ADD CONSTRAINT "TweetThread_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "TweetThread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
