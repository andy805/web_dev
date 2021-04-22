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

const kiwi = new Fruit ({
  name: "kiwi",
  rating: 60,
  review: "okay"
});
const pinapple = new Fruit ({
  name: "pineapple",
  rating: 100,
  review: "best fruit in the universe"
});

const person = new People ({
  name: "marvin",
  age: 17
});

// save one document to the person collection
person.save();

// add multiple documents to the fruits collection
Fruit.insertMany([apple, kiwi, pinapple], function(err) {
  if(err){
    console.log(err);
  }
  else {
    console.log("successfully save all the fruits to fruitsDB")
  }
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log(" in the once callback function");

});
