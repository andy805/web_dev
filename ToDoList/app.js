

const express = require("express");
const app = express();
app.set('view engine', 'ejs');
const port = 3000;

app.get("/", function(req, res) {

  console.log("get request");
  var dayAsNumber = new Date().getDay();
  var day = "";
  switch(dayAsNumber){
    case 0:
      day = "sunday";
      break;
    case 1:
      day = "monday"
      break;
    case 2:
      day = "tuesday";
      break;
    case 3:
      day = "wednesday"
      break;
    case 4:
      day = "thursday";
      break;
    case 5:
      day = "friday"
      break;
    case 6:
      day = "saturday";
      break;
    default:
      day = "Error"
  }
  res.render('list', {dayOfWeek: day});
  // res.sendFile(__dirname + "/index.html");

});

app.listen(port, function() {
  console.log("server is up and running");
});
