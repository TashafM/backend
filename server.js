const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use(userRoutes);

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected successfully");
    app.listen(process.env.PORT || 8000, () => {
      console.log("server started successfully");
    });
  })
  .catch((err) => console.log(err));
