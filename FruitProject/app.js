/* using mongoose instead */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitDB', {useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema ({

  /*add validator */
  name: {
    type: String,
    // required: true  --> also valid way to have required
    required: [true , "why no fruit name"]
  },
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
const orange = new Fruit ({
  name: "",
  rating: 100,
  review: "best fruit in the universe"
});

const person = new People ({
  name: "marvin",
  age: 17
});

// orange.save();
// save one document to the person collection. CREATE
// person.save();

// add multiple documents to the fruits collection. CREATE MANY
// Fruit.insertMany([apple, kiwi, pinapple], function(err) {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log("successfully save all the fruits to fruitsDB")
//   }
// });

// show all record. READ
Fruit.find(function(err, fruits) {
  if(err) {
    console.log(err);
  }
  else {
    // for(let i = 0; i < fruits.length; i++)
    // {
    //   console.log(fruits[i].name);
    // }
    // fruits.forEach(function(fruit, index) {
    //   console.log(fruit.name);
    // });

    console.log(fruits);
    // close the connection to the database
    mongoose.connection.close()
  }
});


// update a document param(filter {} , field{}, callback function). UPDATE
Fruit.updateOne({name: "kiwi"}, {rating: 80}, function (err){
  if(err) {
    console.log(err);
  }
  else {
    console.log("successfully updated the document");
  }

});
// DELETE
Fruit.deleteOne({name: "apple"}, function(err){
  if(err) {
    console.log(err);
  }
  else {
    console.log("successfully deleted a document");
  }

});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log(" in the once callback function");
//
// });
