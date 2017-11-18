//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  // db.collection("Todos").findOneAndUpdate({_id: new ObjectID('5a0fe14a98eafc0d7c30058b')},{
  //   $set: {
  //     completed:true
  //   }
  // },
  // {
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndUpdate({_id: new ObjectID('5a0ed2ec5679f21d7860e77d')},{
    $inc: {
      age: 1
    },
    $set: {
      name: 'Anna'
    }
  },
  {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  });
  
console.log('Connected to MongoDB server');
