
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
  var baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
  var key = '3d8cc23c1b555b49ff6112a0fc931f03';

  https.get(baseUrl+'?q='+city+','+state+"&appid="+key+"&units=imperial", function(response) {
    console.log(response.statusCode);
    //test = response;

    response.on('data', function(data){
      weatherData = JSON.parse(data);
      console.log(weatherData);
      test = String(weatherData.main.temp);
      var description = weatherData.weather[0].description;
      var idIcon = weatherData.weather[0].icon;
      var imageUrl = "https://openweathermap.org/img/wn/"+idIcon+"@2x.png";
      var htmlIcon = "<img src=\""+imageUrl+"\" alt=\"icon for weather\">";
      res.write("<p>The temperature in "+city+","+state+" is: "+test+" f and the weather is: "+String(description)+"</p>");
      res.write(htmlIcon);
      res.send();
      // res.send("<p>The temperature in "+city+","+state+" is: "+String(weatherData.main.temp)+"°f and the weather is: "+String(description)+"</p>");
    });
  });
})

app.listen(port, function () {
  console.log(" weather server is up");
})
