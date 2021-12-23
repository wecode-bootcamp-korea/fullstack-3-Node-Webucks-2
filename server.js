const http = require('http');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const routes = require('./routes');
const PORT = 8000;

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(routes);

const server = http.createServer(app);

const start = async () => {
	try {
		server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
	} catch (err) {
		console.error(err);
	}
};

start();
