const express = require('express');
const router = express.Router();

// GET /user/
router.get('/', (req, res) => {
  res.json({
    status: "🟢 | GOOD",
    DB: {
      connected: global.isMongoConnected || false
    },
    uptime: 0
  });
});

module.exports = router;

