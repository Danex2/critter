/*
  Warnings:

  - You are about to drop the column `city` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the `cities` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "city";

-- DropTable
DROP TABLE "cities";
