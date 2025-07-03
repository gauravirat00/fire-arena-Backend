const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


app.get("/status", async(req, res) => {
  var randomBool = Math.random() < 0.5;

  if(randomBool) {
  res.json({
    status: "🔴 | UNHEALTHY"
  });
  } else {
  res.json({
    status: "🟢 | GOOD"
  });
}
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running at on port ${PORT}`);
});
