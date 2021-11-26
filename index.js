//Start Server with 'nodemon run start'
//Database name can be changed in Mongo URI in .env
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dateTime = require("date-and-time");

//Variables to change as need
mongoUrl = process.env.URL;
port = process.env.PORT;

//Starting Framework
const app = express();

//Database Conection
async function main() {
  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
  });
}
main().catch((err) => console.log(err));

//Database Conection Holder
const connectionHolder = mongoose.connection;
connectionHolder.on("open", () => {
  console.log(
    "✅  Connection to DB successful!" +
      "\n DB Host:  " +
      connectionHolder.host +
      "\n DB Port: " +
      connectionHolder.port +
      "\n DB Name: " +
      connectionHolder.name
  );
  //console.log(connectionHolder);
});

//Routing Traffic
app.use(express.json(), cors());
const tempSensor = require("./routes/tempSensor");
app.use("/temp", tempSensor);

//Starting Date Time Framework
const now = new Date();

//Starting Listener to the server
app.listen(port, () => {
  console.log(
    "Server started at " +
      dateTime.format(now, "YYYY/MM/DD HH:mm:ss") +
      "on PORT " +
      port
  );
});
