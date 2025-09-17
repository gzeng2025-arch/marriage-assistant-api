const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000; // Vercel 自動分配 PORT

// 中間件
app.use(cors());
app.use(bodyParser.json());

// 測試首頁
app.get("/", (req, res) => {
  res.send("Marriage Assistant API is running 🚀");
});

// API 範例：註冊新用戶
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }
  res.json({
    message: "User registered successfully",
    user: { email }
  });
});

// 其他 API 模組可繼續擴展
app.get("/api/leaderboard", (req, res) => {
  res.json({
    leaderboard: [
      { user: "Alice", points: 120 },
      { user: "Bob", points: 90 }
    ]
  });
});

// 本地運行才需要監聽，Vercel 自動處理部署
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app; // ⬅️ Vercel 需要這行
