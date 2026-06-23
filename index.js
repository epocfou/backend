const express = require("express");
const cors = require("cors");
const app = express();
const { randomUUID } = require("crypto");
const axios = require("axios");
const port = 3000;

app.use(cors());

app.use(express.json());

var arrr = ["kol", "door", "laage"];

app.get("/a", (req, res) => {
  res.send(arrr);
});

app.post("/b", (req, res) => {
  console.log(req.body.value1);
  arrr.push(req.body.value1);
  res.send("ok");
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
app.get("/koof", (req, res) => {
  if (req.query.name == "victor") {
    res.send("vc");
  } else {
    res.send("vt");
  }
});

app.get("/f", (req, res) => {
  var teri = [];
  for (var i = 0; i < 100; i++) {
    teri.push(randomUUID());
  }
  res.send(teri);
});

app.get("/g", (req, res) => {
  var pics = [];
  for (var i = 0; i < 5; i++) {
    pics.push("https://picsum.photos/seed/" + randomUUID() + "/800/600");
  }
  res.send(pics);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
