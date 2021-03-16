
/* require express */

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const port = 3000;

app.get("/", function(req, res) {
  console.log("get request");
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res) {
  var firstName = req.body.userFirstName;
  var lastName = req.body.userLastName;
  var email = req.body.userEmail;
  console.log("post request");
  console.log(String(firstName));
  console.log(String(lastName));
  console.log(String(email));
})

app.listen(port, function() {
  console.log("server is running on port "+String(port));
});
