//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a0fd4d998eafc0d7c3002a4')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos')
  // });
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos: ${count}`);
  // },(err) => {
  //   console.log('Unable to fetch todos')
  // });

  db.collection('Users').find({name: 'Anna'}).toArray().then((docs)=>{
    console.log(`Users`);
    console.log(JSON.stringify (docs, undefined, 2));
  },(err) => {
    console.log('Unable to fetch users');
  });

  // db.close();
});
