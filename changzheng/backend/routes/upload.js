const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads/')
});
const upload = multer({ storage });

router.post('/image', upload.single('photo'), (req, res) => {
  res.json({ 
    status: 'success', 
    path: `/uploads/${req.file.filename}`
  });
});

module.exports = router;