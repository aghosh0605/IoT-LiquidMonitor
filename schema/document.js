const { Decimal128 } = require("bson");
const mongoose = require("mongoose");
require("dotenv").config();

var dbcollection = process.env.COLLECTION;

const documentSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  time: {
    type: Decimal128,
    required: true,
  },
  temp: {
    type: Decimal128,
    required: true,
  },
  ph: {
    type: Decimal128,
    required: true,
  },
  oxygen: {
    type: Decimal128,
    required: true,
  },
});

//arduino1 is the MongoDB collection name that the database will create
module.exports = mongoose.model(dbcollection, documentSchema);
