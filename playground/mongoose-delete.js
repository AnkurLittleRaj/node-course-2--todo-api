const {mongoose} = require('./../server/db/moongose');
const {Todo} = require('./../server/models/todo');
const {user}  = require('./../server/models/user');
const {ObjectId} = require('mongodb');

Todo.remove({}).then((doc)=>{
    console.log(doc);
});