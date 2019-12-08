const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let SearchRoutes = require("./routes/searchRoutes.js");
app.use("/search", SearchRoutes)

app.listen(PORT)