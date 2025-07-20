const express = require('express');
const router = express.Router();

// 模拟时光机事件数据（次日替换为真实数据）
const mockEvents = [
  { id: 1, date: "1934-10", title: "长征开始", description: "中央红军从瑞金出发..." },
  { id: 2, date: "1935-01", title: "遵义会议", description: "确立毛泽东领导地位..." }
];

router.get('/events', (req, res) => {
  res.json(mockEvents); // 返回模拟数据
});

module.exports = router;