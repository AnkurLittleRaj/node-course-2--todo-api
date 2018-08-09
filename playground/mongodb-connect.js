const {MongoClient,ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
if(err){

    return console.log('Unable to connect MongoDB');
}

console.log('mongoDB connected');

// db.collection('Todos').insertOne({
//     text:"Something to do",
//     completed : false
// }, (err,result) =>{
// if(err){
//     return console.log('unable to insert because of',err)

// }
// console.log(JSON.stringify(result.ops,undefined,2));

// });
db.collection('Users').insertOne({
    name:"Ankur Raj",
    Age:23,
    Location:"Bangalore"
},(err,result)=>{
    if(err){
        return console.log("error is there",err);
    }
console.log(JSON.stringify(result.ops,undefined,2));
})

db.close();

});