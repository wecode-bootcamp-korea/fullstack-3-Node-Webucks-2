import http from "http";
import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use((req, res) => {
  const { status, message } = err;
  console.err(err);
  res.status(status || 500).json({ message });
});

const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(8080, () => console.log("Server is listening on 8080"));
  } catch (err) {
    console.log(err);
    await prisma.$disconnect();
  }
};

start();
