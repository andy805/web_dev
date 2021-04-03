

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
const port = 3000;

var toDoList = [];

app.get("/", function(req, res) {

  console.log("get request");
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  var today = new Date();
  var dayAsNumber = new Date().getDay();
  var day = "";
  var testDay = today.toLocaleDateString("en-Us", options);
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
  res.render('list', {dayOfWeek: testDay,
                      toDo: toDoList});
  // res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {

  console.log(req.body.addToDo);
  console.log("Post request");
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  var today = new Date();
  var newToDoItem = req.body.addToDo;
  toDoList.push(newToDoItem);
  console.log("lenght"+ toDoList.length);
  console.log(toDoList);
  res.render('list', {dayOfWeek: today.toLocaleDateString("en-Us", options), toDo: toDoList});

});

app.listen(port, function() {
  console.log("server is up and running");
});
