const express = require("express");

const app = express();

// this / is our root
app.get("/", function(request, response) {
  response.send("<h1> Hello World! </h1>");
});

//req and res are best practice
app.get("/about", function(req, res) {
  res.send("<p> My name is Andy Velazquez and I am a software engineer</p>");
})

app.get("/hobbies", function(req, res) {
  res.send("<p> i like socializing and gaming and code </p>");
})

app.listen(3000, function() {
  console.log("server started on port 3000");
});
