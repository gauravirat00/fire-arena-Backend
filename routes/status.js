const express = require('express');
const router = express.Router();

// GET /user/
router.get('/', (req, res) => {
  let uptimeInMs = Date.now() - global.startTime;
  let parsedUptime = ms(uptimeInMs);
  let uptime = `${parsedUptime.days} D, ${parsedUptime.hours} H, ${parsedUptime.minutes} M, ${parsedUptime.seconds} S`;
  
  res.json({
    status: "🟢 | GOOD",
    DB: {
      connected: global.isMongoConnected || false
    },
    uptime 
  });
});

module.exports = router;

