const express = require("express");
const cors = require("cors");
const chats = require("./data/data");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/chat", (req, res) => {
  try {
    res.json(chats);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((e) => e._id === req.params.id);
  res.json(singleChat);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
