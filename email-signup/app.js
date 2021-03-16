
/* require express */

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 3000;

app.get("/", function(req, res) {

  console.log("get request");
  res.sendFile(__dirname+"/index.html");

});

app.listen(port, function() {
  console.log("server is running on port "+String(port));
});
