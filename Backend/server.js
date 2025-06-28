const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/api/chat", (req, res) => {
  res.send("hello client");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
