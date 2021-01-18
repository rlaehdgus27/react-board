const express = require("express");
const morgan = require("morgan");
const connect = require("./schemas");

const PORT = process.env.port || 3000;

const app = express();
connect();

app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
