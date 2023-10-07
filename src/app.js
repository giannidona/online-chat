import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import { Server } from "socket.io";

import viewsRouter from "./routes/viewsRouter.js";

const app = express();
const httpServer = app.listen(8080, () =>
  console.log("http://localhost:8080/login")
);
const socketServer = new Server(httpServer);

// mongoose.connect();

app.use("/static", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

socketServer.on("connection", (socket) => {
  console.log(`Se conectó el usuario con socket id: ${socket.id}`);

  socket.on("mensaje", (data) => {
    mensajes.push({ socketid: socket.id, mensaje: data.mensaje });
    socketServer.emit("nuevo_contenido", mensajes);
  });
});

app.use(viewsRouter);
