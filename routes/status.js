const express = require('express');
const router = express.Router();

// GET /user/
router.get('/', (req, res) => {
  const ramUsage_raw_mb = process.memoryUsage().rss / 1024 / 1024;
  const ramusage = `${ramUsage_raw_mb.toFixed(2)} MB`;

  let uptimeInMs = Date.now() - global.startTime;
  let parsedUptime = ms(uptimeInMs);
  let uptime = `${parsedUptime.days} D, ${parsedUptime.hours} H, ${parsedUptime.minutes} M, ${parsedUptime.seconds} S`;
  
  res.json({
    status: "🟢 | GOOD",
    DB: {
      connected: global.isMongoConnected || false
    },
    uptime,
    usage: {
      ram: ramusage || null,
      cpu: global.cpu_usage ||  null
    }
  });
});

module.exports = router;

