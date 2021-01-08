const express = require("express");
const app = express();
const PORT = process.env.port || 8000;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

import express from "express";
import morgan from "morgan";
import connect from "./schemas";
import bodyParser from "body-parser";

const app = express();

app.set(`port`, process.env.PORT);
app.use(morgan(`dev`));
connect();

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(app.get(`port`), () => {
  console.log(
    ` - 🍀 [DEV SAMPLE] GRAPHQL BACKEND SERVER START WITH MONGODB  PORT : ${process.env.PORT} 🍀 `
  );
});
