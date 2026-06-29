const express = require("express");
const cors = require("cors");
const { randomUUID } = require("crypto");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const picschema = new mongoose.Schema({
  pics_url: String,
});
const pix = mongoose.model("pictures", picschema);

mongoose
  .connect("mongodb://127.0.0.1:27017/image-test")
  .then(() => {
    console.log("database connected");
  })
  .catch((erri) => {
    console.log("error occurred: " + erri);
  });

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
    var pict = "https://picsum.photos/seed/" + randomUUID() + "/800/600";
    new pix({
      pics_url: pict,
    }).save();
    pics.push(pict);
  }
  res.send(pics);
});

app.get("/h", (req, res) => {
  var kuchvi;
  kuchvi = pix
    .find()
    .then((urls) => {
      let _res = urls.map((a) => a.pics_url);
      res.send(_res);
    })
    .catch((err) => {
      console.log(err);
      res.send([]);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
