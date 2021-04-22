/* using mongoose instead */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitDB', {useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema ({

  name: String,
  rating: Number,
  review: String

});

const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const People = mongoose.model("People", peopleSchema);

const apple = new Fruit ({
  name: "apple",
  rating: 90,
  review: "apples are great and very yummy"
});

const person = new People ({
  name: "marvin",
  age: 17
});

person.save();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log(" in the once callback function");

});
