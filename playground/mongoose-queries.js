const {ObjectID} = require('mongodb');

const {mongoose} = require ("./../server/db/mongoose");
const {Todo} =  require ("./../server/models/todo");
const {User} =  require ("./../server/models/user");

var id = "5a1494b8e963e43040e23396";
var userid = "5a11717cd6812f2c213365ac";

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}
if(!ObjectID.isValid(userid)){
  console.log('User ID not valid');
}

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => {
  console.log(e);
});

User.findById(userid).then((user) => {
  if(!user) {
    return console.log("User not found")
  }
  console.log("User: ", user);
}).catch((e) => {
  console.log(e);
})
