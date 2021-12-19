# IOT-LiquidMonitor
Deployed Link https://water-sample.herokuapp.com/temp
(Maybe sometime it takes time as MongoDB datbase are paused if they are not used for somedays)

### How to run the server as dev 
Open the server root directory and run command `nodemon run start` to start the server. Main server name is **index.js**.

### How to run the server as production
Run `node index.js` to run the server.

### Technical items used :)
- MongoDB to store sensor data. MongoDB CRUD operations are used.
- NodeMCU(ESP -12E) to get sensor data and to call API to store the sensor data to Database. Used Arduino Libraries are -
  1. ESP8266WiFi.h
  2. ESP8266HTTPClient.h
  3. ArduinoJson.h
- Node JS to create the server. Used Node JS are -
  1. Express(GET, POST, DELETE,PATCH,PUT)
  2. Mongoose
  3. Mongodb
  4. dotenv
  5. date-and time

## Notes
- Database name can be changed in MongoURI in `.env` file.
- Collection Name can be changed in `document.js` in `Schema` Folder
- Don't use the **MongoDB URI** that is available for **MongoDB compass**. It will conflict with Heroku. Use the URI that is available for **NodeJS APP** Development.Also delete the last parameter `ssl=true` from the URI.
