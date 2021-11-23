#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <ArduinoJson.h> //v5.13.5

const char *ssid = "POCO F1";
const char *password = "9434852054";
const char* serverName = "http://192.168.43.239:4444/temp";
void setup()
{
    Serial.begin(115200);
    delay(4000);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED)
    { //Check for the connection
        delay(1000);
        Serial.println("Connecting to WiFi..");
    }

    Serial.println("Connection established!");
    Serial.print("IP address:\t");
    Serial.println(WiFi.localIP());
    Serial.println("Connected to the WiFi network");
}

void loop()
{
    if (WiFi.status() == WL_CONNECTED)
    {
        HTTPClient http;
        WiFiClient client;
        http.begin(client, serverName); 
        http.addHeader("Content-Type", "application/json");

        StaticJsonBuffer<200> jsonBuffer;
        JsonObject &root = jsonBuffer.createObject();
        root["temp"] = 105;
        root["ph"] = 7.5;
        root["oxygen"] = 96;
        //root["va"] = "No";
        //root.printTo(Serial);
        /*int httpResponseCode = http.POST("{\n\t\"id\":\"urn:ngsi-ld:Sensor:001\", \"type\":\"MotionSensor\",\n\t\"value\":\"NO\"\n}"); */
        char json_str[100];
        root.prettyPrintTo(json_str, sizeof(json_str));
        int httpResponseCode = http.POST(json_str);
        Serial.println(json_str);
        if (httpResponseCode > 0)
        {
            String response = http.getString();

            Serial.println(httpResponseCode);
            Serial.println(response);
        }
        else
        {
            Serial.print("Error on sending POST: ");
            Serial.println(httpResponseCode);
        }
        http.end();
    }
    else
    {
        Serial.println("Error in WiFi connection");
    }
    delay(3000);
}
