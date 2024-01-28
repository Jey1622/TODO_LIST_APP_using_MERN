const express = require("express");
const app = express();

const mongoose = require("mongoose");
require('dotenv').config()
const router = require("./routes/routes");
const cors = require("cors");

const DB_URI =process.env.DB_URI

app.use(express.json());
app.use(cors());
app.use("/api/tasks", router);

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("DB is connected");
      console.log("App running in port 4000");
    });
  })
  .catch((error) => {
    console.log("error while connecting " + error.message);
  });
