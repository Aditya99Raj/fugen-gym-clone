const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

const planRoute = require("../controllers/planController");
app.use('/api/plans', planRoute);


module.exports = app;