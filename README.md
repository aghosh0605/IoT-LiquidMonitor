# IOT-LiquidMonitor

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
