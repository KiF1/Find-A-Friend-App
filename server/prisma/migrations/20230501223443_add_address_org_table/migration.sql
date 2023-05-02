/*
  Warnings:

  - You are about to drop the column `latitude` on the `organizations` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `organizations` table. All the data in the column will be lost.
  - Added the required column `address` to the `organizations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `organizations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organizations" DROP COLUMN "latitude",
DROP COLUMN "longitude",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL;
