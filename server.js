const express = require("express");
const app = express();
const database = require("./helpers/database");
require("dotenv").config();
const rootRoutes = require("./routes/index");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

database();

app.use(cors());
app.use(express.json())
app.use("/", rootRoutes);

app.listen(PORT, () => {
    console.log("Running on port: 5000")
})