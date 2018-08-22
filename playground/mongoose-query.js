const {mongoose} = require('./../server/db/moongose');
const {Todo} = require('./../server/models/todo');
const {user}  = require('./../server/models/user');
const {ObjectId} = require('mongodb');
var id ="5b7cef9b9371198409ff28f9";
// var id ="5b7b95a6bac1c5101f887cfa112";
// if(!ObjectId.isValid(id)){
//     console.log("Id is not valid");
// }
// // Todo.find({
// //     _id : id
// // }).then((todos)=>{
// //     console.log('todos',todos)
// // });
// // Todo.findOne({
// //     _id : id
// // }).then((todo)=>{
// //     console.log('todo',todo)
// // });
// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log("todo is not in database");
//     }
//     console.log('todo by ID',todo)
// }).catch((e)=>{
// console.log(e)});
user.findById(id).then((User)=>{
    if(!User){
        console.log("there is no user with this ID")
    }
    console.log("required user",User)
}).catch((e)=>{
    console.log("there is error",e);
})