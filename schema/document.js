const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
  sub: {
    type: Boolean,
    required: true,
    default: false,
  },
});

//Arduino1 is the MongoDB collection name that the database will create
module.exports = mongoose.model("Arduino1", documentSchema);
