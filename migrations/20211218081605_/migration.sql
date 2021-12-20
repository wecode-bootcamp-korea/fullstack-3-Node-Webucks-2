/*
  Warnings:

  - Added the required column `caffeine` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calories` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `nutritions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nutritions` ADD COLUMN `caffeine` VARCHAR(191) NOT NULL,
    ADD COLUMN `calories` VARCHAR(191) NOT NULL,
    ADD COLUMN `fat` VARCHAR(191) NOT NULL,
    ADD COLUMN `protein` VARCHAR(191) NOT NULL,
    ADD COLUMN `sodium` VARCHAR(191) NOT NULL;
