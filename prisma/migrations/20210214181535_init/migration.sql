/*
  Warnings:

  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `location` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_locationId_fkey";

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "location" point NOT NULL;

-- DropTable
DROP TABLE "Location";
