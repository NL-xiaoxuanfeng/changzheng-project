//express主入口文件
const express = require('express');
const cors = require('cors');
const app = express();

// 引入路由
const timelineRouter = require('./routes/timeline');
const uploadRouter = require('./routes/upload');

app.use(cors()); // 解决跨域
app.use(express.json()); 

// 挂载路由
app.use('/api/timeline', timelineRouter);
app.use('/api/upload', uploadRouter);

// 测试接口
app.get('/', (req, res) => {
  res.status(200).json({ message: "长征后端服务已启动！" });
});

app.listen(5000, () => console.log("Server running on port 5000"));