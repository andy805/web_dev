const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true,
                                              useUnifiedTopology: true});

  var dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }
const toDoItemSchema = new mongoose.Schema({
  item: {type: String, required: true},
  deleteFlag: {type: Boolean, default: false},
  createDate: {type: Date, default: new Date().toLocaleString("en-Us", dateOptions)},
  timeStamp: {type: Date, default: Date.now},
  listName: {type: String, required: true}
});


const ToDo = mongoose.model('ToDo', toDoItemSchema);

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

  /* mongodb logic. need to get all to do items an array of objects */
  let mostRecentDocument = {};
  ToDo.findOne({}, {}, { sort: {'timeStamp': -1}}, function(err, recent){

    if(err){
      console.log(err);
    }
    else {
      mostRecentDocument = recent;

      console.log(recent);
      if(recent === null){
        /* database is empty */

      }
      else {
        testDay = recent.timeStamp.toLocaleDateString("en-Us", options);
      }
    }

  });
  ToDo.find({createDate: mostRecentDocument.createDate}, function(err, recDocs){
    if(err) {
      console.log(err);
    }
    else{
      if(recDocs === null){

      }
      else {
          recDocs.forEach(function (doc){
            toDoList.push(doc.item);
          });
      }

    }
  })

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
  // var newToDoItem = req.body.addToDo;
  let newToDoItem = new ToDo({
    item: req.body.addToDo,
    listName: req.body.date
  });

  newToDoItem.save()
  toDoList.push(newToDoItem.item);
  console.log("lenght"+ toDoList.length);
  console.log(req.body);
  res.render('list', {dayOfWeek: today.toLocaleDateString("en-Us", options), toDo: toDoList});

});

app.get("/about", function(req, res) {
  res.render('about');
})

app.listen(port, function() {
  console.log("server is up and running");
});
