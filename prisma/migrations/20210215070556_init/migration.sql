/*
  Warnings:

  - You are about to alter the column `location` on the `pets` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- AlterTable
ALTER TABLE "pets" ALTER COLUMN "location" SET DATA TYPE DECIMAL(65,30)[];
