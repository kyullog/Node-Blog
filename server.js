const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const userRouter = require("./routers/userRouter.js");
const postRouter = require("./routers/postRouter");

const parser = express.json();
const capitalizer = (req, res, next) => {
  if (req.body.name) {
    req.body.name = req.body.name.toUpperCase();
  }
  next();
};
server.use(helmet());
server.use(cors());
server.use(parser, capitalizer);
server.use("/user", userRouter);
server.use("/post", postRouter);

module.exports = server;
