const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/a", (req, res) => {
  res.send("Hello World1!");
});

app.get("/b", (req, res) => {
  res.send("Hello World!2");
});

app.get("/c", (req, res) => {
  res.send("Hello World!3");
});

app.get("/d", (req, res) => {
  res.send("Hello World!4");
});

app.get("/e", (req, res) => {
  res.send("Hello World!5");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
