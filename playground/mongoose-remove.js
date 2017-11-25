const {ObjectID} = require('mongodb');

const {mongoose} = require ("./../server/db/mongoose");
const {Todo} =  require ("./../server/models/todo");
const {User} =  require ("./../server/models/user");

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: "5a19ca04c69ecfa901cd990c"}).then((todo) => {
  console.log(todo);
});
// Todo.findByIdAndRemove('5a19ca04c69ecfa901cd990c').then((todo) => {
//   console.log(todo);
// })
