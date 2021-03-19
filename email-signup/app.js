// import mailchimp from "@mailchimp/mailchimp_marketing";
/* require express */
// var token = config.apiKey;
// var mailchimpServer = config.server

const express = require('express');
var config = require('./config.js');
const mailchimp = require('@mailchimp/mailchimp_marketing');
console.log(config.myKey);
console.log(config.server);
mailchimp.setConfig({
  apiKey: config.myKey,
  server: config.server
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

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
  run();
})

app.listen(port, function() {
  console.log("server is running on port "+String(port));
});
