var {mongoose} = require('./db/moongose');
var express = require ('express');
var bodyParser = require('body-parser') ;
var {Todo} = require('./models/todo');
var {user} = require('./models/user');
const {ObjectId} = require('mongodb');
var app = express();
app.use(bodyParser.json());
// app.post('/todos',(req,res)=>{
   
//    var todo = new Todo({
//        text: req.body.text
//    });

//    todo.save().then((doc)=>{
//        res.send(doc);

//    },(err)=>{
// res.status(400).send(err);
//    })
// });
app.post('/todos',(req,res) =>{
    var newTod = new Todo({
        text : req.body.text,
        completed : req.body.completed
    });

    newTod.save().then((doc) =>{
        res.send(doc);
    },(e) =>{
        res.status(400).send(e)
    });
});
app.get('/todos',(req,res)=>{
    Todo.find().then((todos) =>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e) 
    })
})
// app.post('/users',(req,res) =>{
//     var newTod = new user({
//        email : req.body.email
//     });

//     newTod.save().then((doc) =>{
//         res.send(doc);
//     },(e) =>{
//         res.status(400).send(e)
//     });
// });


app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectId.isValid(id)){
    return res.status(404).send();
}
else{
    Todo.findById(id).then((todo)=>{
        if(todo){
            res.send({todo});
        }
        else{
            res.status(404).send();
        }
    }).catch((e)=>{
        res.status(400).send(); 
    })
}
})
app.listen(3000,() =>{
    console.log("url is working properly");
})