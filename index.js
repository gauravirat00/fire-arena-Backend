global.startTime = Date.now();
require('./others/get_cpu.js');

require("./global_modules/ms");
require("./DB/mongo.connect.js");

const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

const statusRoute = require("./routes/status");

app.use(cors());
app.use(express.json());

app.use("/status", statusRoute);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


app.get("/dummy/profile", async(req, res) => {
  res.json({
    login: true,
    email: "demo@fire.arena",
    name: "Demo",
    id: 0,
    isAdmin: false
  });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running at on port ${PORT}`);
});
