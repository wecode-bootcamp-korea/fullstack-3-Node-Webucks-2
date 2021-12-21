const PORT = 8080;
const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.log(err);
    // await prisma.$disconnect();
  }
};

start();
