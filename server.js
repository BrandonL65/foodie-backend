const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
  res.send("Hello there");
})

app.listen(PORT)