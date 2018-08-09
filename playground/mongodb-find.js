const {MongoClient,ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
if(err){

    return console.log('Unable to connect MongoDB');
}

console.log('mongoDB connected');
// db.collection('Todos').find({_id: new ObjectId('5b6a736695992b1924f5761d')}).toArray().then((docs)=>{
//     console.log("documents");
//     console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log("not able to fetch data",err)
// })
// db.
db.collection('Users').find({name:"Ankur Raj"}).count().then((res)=>{
    console.log(`total count is ${res}`);

},(err)=>{
console.log("there is error",err)
});
db.collection('Users').find({name:"Ankur Raj"}).toArray().then((res)=>{
    console.log(`names are ${JSON.stringify(res,undefined,2)}`);

},(err)=>{
console.log("there is error",err)
});

// db.close();

});