const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000;

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post( "/", function(req, res) {
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  num1 = Number(num1);
  num2 = Number(num2);
  var answer = num1 + num2;
  
  res.send("<h1> Your Calculation: "+answer+" </h1>");

})

app.listen(3000, function () {
  console.log("calculator app is listening");
});
