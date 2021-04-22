const mongoClient = require("mongodb").MongoClient /*import mongodb library */
const assert = require('assert'); /* import assert module */

const url= 'mongodb://localhost:27017';

const dbName = "fruitDB";
const client = new mongoClient(url, { useUnifiedTopology: true });

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruit');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
};

client.connect(function(err){
  assert.equal(null, err);
  console.log('connect successfully to server')

  const db = client.db(dbName);
  findDocuments(db, function() {
    client.close();
  });

});
