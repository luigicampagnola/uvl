const express = require("express");
const app = express();
const listRouter = require("../routes/list.router");
const retrieveRouter  = require("../routes/retrieve.router");
app.use(express.json()) //convert every request to a js object

app.use("/list", listRouter);
app.use("/retrieve", retrieveRouter)

module.exports = app;
