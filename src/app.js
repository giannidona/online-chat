import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import { Server } from "socket.io";

import homeRouter from "./routes/homeRouter.js";
import chatRouter from "./routes/chatRouter.js";
import profileRouter from "./routes/profileRouter.js";

const app = express();
const httpServer = app.listen(8080, () => console.log("live on 8080"));
const socketServer = new Server(httpServer);

// mongoose.connect();

app.use("/static", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

app.use(homeRouter);
app.use(chatRouter);
app.use(profileRouter);
