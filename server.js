const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// 中間件
app.use(cors());
app.use(bodyParser.json());

// 測試首頁路由
app.get("/", (req, res) => {
  res.send("Marriage Assistant API is running ✅");
});

// 你的 API 路由
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  res.json({ message: "User registered successfully", user: { email } });
});

module.exports = app;
