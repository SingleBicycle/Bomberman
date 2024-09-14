const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

require("dotenv").config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connect", (socket) => {
  console.log("socket: ", socket.id);
});

app.use(express.static("public"));
httpServer.listen(process.env.PORT);
