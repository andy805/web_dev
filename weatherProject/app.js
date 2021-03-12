
/* require express */
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;
let test;
let weatherData;

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res) {
  var city = req.body.city;
  var state = req.body.state;
  https.get('https://api.openweathermap.org/data/2.5/weather?q='+
  city+','+state+"&appid=3d8cc23c1b555b49ff6112a0fc931f03&units=imperial", function(response) {
    console.log(response.statusCode);
    //test = response;
    response.on('data', function(data){
      weatherData = JSON.parse(data);
      console.log(weatherData.main.temp);
      test = String(weatherData.main.temp);
      res.send("<p>The temperature in "+city+" is: "+String(weatherData.main.temp)+"</p>");
    });
  });
})

app.listen(port, function () {
  console.log(" weather server is up");
})
