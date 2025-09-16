const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 註冊用戶
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }
  res.json({ message: "User registered successfully", user: { email } });
});

// 綁定伴侶
app.post("/api/bind-partner", (req, res) => {
  const { userId, partnerId } = req.body;
  res.json({ message: "Partner bound successfully", userId, partnerId });
});

// 添加日記
app.post("/api/add-diary", (req, res) => {
  const { userId, diary } = req.body;
  res.json({ message: "Diary added", userId, diary });
});

// 獲取日記
app.get("/api/get-diaries/:userId", (req, res) => {
  const { userId } = req.params;
  res.json({ userId, diaries: ["Day 1: ...", "Day 2: ..."] });
});

// 添加紀念日
app.post("/api/add-anniversary", (req, res) => {
  const { userId, date, title } = req.body;
  res.json({ message: "Anniversary added", userId, date, title });
});

// 添加任務
app.post("/api/add-task", (req, res) => {
  const { userId, task } = req.body;
  res.json({ message: "Task added", userId, task });
});

// 生成挑戰
app.post("/api/generate-challenge", (req, res) => {
  res.json({ challenge: "Say thank you 3 times today" });
});

// 完成挑戰
app.post("/api/complete-challenge", (req, res) => {
  const { userId, challenge } = req.body;
  res.json({ message: "Challenge completed", userId, challenge });
});

// 排行榜
app.get("/api/leaderboard", (req, res) => {
  res.json({
    leaderboard: [
      { user: "Alice", points: 120 },
      { user: "Bob", points: 90 }
    ]
  });
});

// 啟動伺服器
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Marriage Assistant API running on port ${port}`);
});
