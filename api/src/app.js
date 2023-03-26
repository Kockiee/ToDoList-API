const express = require("express");
const router = require("./router.js");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use((res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

app.use(router);

module.exports = app;