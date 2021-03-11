const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/", function(req, res) {
    var weight = req.body.weight;
    var height = req.body.height;

    var bmi = Number(weight) + Number(height);

    res.send("<h1> Your Bmi is: "+bmi+ "</h1>");

})

app.listen(port, function () {
  console.log("started to listen");
});
