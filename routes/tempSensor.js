const express = require("express");
const schema = require("./../schema/document");
const router = express.Router();
var uniqid = require("uniqid");
const dateTime = require("date-and-time");

//Starting Date Time Framework
const now = new Date();
const timenow = dateTime.format(now, "YYYYMMDDHHmmss");
const timenow_int = parseInt(timenow);

var arduino1 = uniqid.time();
//console.log(arduino1);

//GET at /temp
router.get("/", async (req, res) => {
  try {
    const temp = await schema.find();
    res.send(JSON.stringify(temp));
    console.log("Data Send!");
  } catch (err) {
    res.send("GET Error Dtected: " + err);
  }
});

//GET at /temp/time
router.get("/:id", async (req, res) => {
  try {
    const temp = await schema.findById(req.params.id);
    res.send(JSON.stringify(temp));
  } catch (err) {
    res.send("GET Error Dtected: " + err);
  }
});

//POST at /temp
router.post("/", async (req, res) => {
  const now = new Date();
  console.log(req.body);
  const data = new schema({
    uuid: arduino1,
    time: timenow_int,
    temp: req.body.temp,
    ph: req.body.ph,
    oxygen: req.body.oxygen,
  });
  try {
    const temp = await data.save();
    res.send("Received");
  } catch (err) {
    res.send("POST Error Dtected: " + err);
  }
});

//PATCH at /temp
router.patch("/:id", async (req, res) => {
  try {
    const data = await schema.findById(req.params.id);
    data.sub = req.body.sub;
    data.temp = req.body.temp;
    data.ph = req.body.ph;
    data.oxygen = req.body.oxygen;
    const temp = await data.save();
    res.json(temp);
  } catch (err) {
    res.send("PATCH Error Dtected: " + err);
  }
});

module.exports = router;
