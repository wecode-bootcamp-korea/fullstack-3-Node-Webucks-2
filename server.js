const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const prisma = require('./prisma');
const PORT = 8000;

const start = async () => {
	try {
		server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
	} catch (err) {
		console.error(err);
	}
};

start();
