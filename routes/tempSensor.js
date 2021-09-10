const express = require("express");
const schema = require("./../schema/document");
const router = express.Router();

//GET at /temp
router.get("/", async (req, res) => {
  try {
    const temp = await schema.find();
    res.send(JSON.stringify(temp));
  } catch (err) {
    res.send("GET Error Dtected: " + err);
  }
});

//POST at temp
router.post("/", async (req, res) => {
  console.log(req.body);
  const data = new schema({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
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
    const temp = await data.save();
    res.json(temp);
  } catch (err) {
    res.send("PATCH Error Dtected: " + err);
  }
});

module.exports = router;
