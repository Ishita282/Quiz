const express = require("express");
const cors = require("cors");
const auth = require("./src/routers/userRoutes");
const quiz = require("./src/routers/quizeRoutes");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/auth", auth);
app.use("/api/quiz", quiz);

module.exports = app;
