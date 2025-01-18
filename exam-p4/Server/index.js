const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./router/index");
const cors = require("cors")
const app = express();
const port = 3000
app.get("/", (req, res) => {
  res.send("Hello World!");
});
dotenv.config();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/watches", router);




mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
