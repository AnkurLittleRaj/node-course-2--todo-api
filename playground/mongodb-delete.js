const {MongoClient,ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
if(err){

    return console.log('Unable to connect MongoDB');
}

console.log('mongoDB connected');
//deletemany
// db.collection('Todos').deleteMany({text:"eat lunch"}).then((res)=>{
//     console.log(res);
// })
//delete one
// db.collection('Todos').deleteOne({text:"eat lunch"}).then((res)=>{
//     console.log(res);
// })
//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
//     console.log(res);
// })
db.collection('Users').deleteOne({_id : new ObjectId("5b6bc5f818b5674d4a754887")}).then((res)=>{
    console.log(res);
})
// db.close();

});