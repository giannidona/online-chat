import express from "express";
import MongoStore from "connect-mongo";
import session from "express-session";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import { Server } from "socket.io";

import viewsRouter from "./routes/viewsRouter.js";
import sessionRouter from "./routes/sessionRouter.js";

const app = express();
const httpServer = app.listen(8080, () =>
  console.log("http://localhost:8080/login")
);
const socketServer = new Server(httpServer);

mongoose.connect(
  "mongodb+srv://gianicraft:X5A0csVWV7y1SB9a@cluster0.bb8sucd.mongodb.net/?retryWrites=true&w=majority"
);

app.use("/static", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://gianicraft:X5A0csVWV7y1SB9a@cluster0.bb8sucd.mongodb.net/?retryWrites=true&w=majority",
    }),
    secret: "aawd89n=02a-w92",
    resave: false,
    saveUninitialized: true,
  })
);

app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

socketServer.on("connection", (socket) => {
  console.log(`Se conectó el usuario con socket id: ${socket.id}`);
});

app.use(sessionRouter);
app.use(viewsRouter);
