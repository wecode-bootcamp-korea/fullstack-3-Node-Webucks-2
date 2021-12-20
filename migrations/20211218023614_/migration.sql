/*
  Warnings:

  - You are about to drop the column `cateogory_id` on the `products` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `cateogory_id`,
    ADD COLUMN `category_id` INTEGER NOT NULL;
