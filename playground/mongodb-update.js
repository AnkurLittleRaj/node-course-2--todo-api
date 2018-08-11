const {MongoClient,ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
if(err){

    return console.log('Unable to connect MongoDB');
}

console.log('mongoDB connected');
// db.collection('Todos').findOneAndUpdate({
//    _id: new ObjectId('5b6bc00418b5674d4a754886') 
// },{
//     $set: {
//         completed: false
//     }
// },{
//     returnOrignal : false
// }).then((res)=>{
//     console.log(res)
// },(err)=>{
//     console.log('error is here:',err);
// })
db.collection('Users').findOneAndUpdate({_id: new ObjectId("5b6bc69418b5674d4a754889")},{
    $set:{
        name: 'john'

    },$inc: {
        Age : 1
    }},{
returnOrignal : false
    }
).then((res)=>{
    console.log(res)
},(err)=>{console.log('error is here',err)})
// db.close();

});