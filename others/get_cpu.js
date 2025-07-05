global.cpu_usage = `0 %`;

function getCpuUsage() {
  const startUsage = process.cpuUsage();
  const startTime = process.hrtime();

  setTimeout(() => {
    const elapTime = process.hrtime(startTime);
    const elapUsage = process.cpuUsage(startUsage);

    const elapTimeMS = elapTime[0] * 1000 + elapTime[1] / 1e6;
    const elapUserMS = elapUsage.user / 1000; // microseconds to milliseconds
    const elapSysMS = elapUsage.system / 1000;

    const cpuPercent = ((elapUserMS + elapSysMS) / elapTimeMS) * 100;

    global.cpu_usage = `${cpuPercent.toFixed(2)} %`;
  }, 1000); // measure over 1 second
}

// 🔁 Repeatedly check CPU usage
setInterval(() => {
  getCpuUsage();               // 👈 you forgot to call this
//   console.log(global.cpu_usage);
}, 1000);