const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var dateOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric"
}
const toDoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  deleteFlag: {
    type: Boolean,
    default: false
  },
  createDate: {
    type: String,
    default: new Date().toLocaleString("en-Us", dateOptions)
  },
  timeStamp: {
    type: Date,
    default: Date.now
  },
  listName: {
    type: String,
    required: true
  }
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
  /* mongodb logic. need to get all to do items an array of objects */
  let mostRecentDocument = {};
  ToDo.findOne({}, {}, {
    sort: {
      'timeStamp': -1
    }
  }, function(err, recent) {
    if (err) {
      console.log(err);
    } else {
      mostRecentDocument = JSON.parse(JSON.stringify(recent));
      console.log("first find most recent is: " + mostRecentDocument.createDate);
      console.log(recent);
      if (recent === null) {
        /* database is empty */
      } else {
        testDay = recent.createDate;
        ToDo.find({
          createDate: mostRecentDocument.createDate
        }, function(err, recDocs) {
          if (err) {
            console.log(err);
          } else {
            console.log("second find: \n");
            console.log(recDocs);
            if (recDocs === null) {

            } else {
              console.log("in the else before loop: " + recDocs);
              for (let i = 0; i < recDocs.length; i++) {
                if (toDoList.length === 0) {
                    toDoList.push(recDocs[i].item);

                } else {

                  if (toDoList[i] === recDocs[i].item) {

                  } else {
                    toDoList.push(recDocs[i].item);
                    console.log("document is: " + recDocs[i].item);
                  }
                }
              }
              // recDocs.forEach(function(doc) {
              //   console.log("document is: " + doc.item);
              //   toDoList.push(doc.item);
              // });
              res.render('list', {
                dayOfWeek: new Date(String(recDocs[0].timeStamp)).toLocaleDateString("en-Us", options),
                toDo: toDoList
              });
            }

          }
        });
      }
    }

  });
  console.log("before second find. the createDAte is: " + mostRecentDocument.createDate);

  // res.render('list', {
  //   dayOfWeek: testDay,
  //   toDo: toDoList
  // });
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
  console.log("lenght" + toDoList.length);
  console.log(req.body);
  res.render('list', {
    dayOfWeek: today.toLocaleDateString("en-Us", options),
    toDo: toDoList
  });

});

app.get("/about", function(req, res) {
  res.render('about');
})

app.listen(port, function() {
  console.log("server is up and running");
});
