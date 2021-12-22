const { PrismaClient } = require('@prisma/client');
const { productDao } = require('./productDao');
const { userDao } = require('./userDao');

const prisma = new PrismaClient();

module.exports = { prisma, productDao, userDao };
