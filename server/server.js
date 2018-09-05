const _ = require('lodash');
var {mongoose} = require('./db/moongose');
const express = require ('express');
const bodyParser = require('body-parser') ;
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectId} = require('mongodb');
var {authenticate} = require('./middleware/authenticate');
var app = express();
const port = process.env.PORT||3000;
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
});
app.delete('/todos/:id',(req,res)=>{
       var id = req.params.id;
    if(!ObjectId.isValid(id)){
    return res.status(404).send();
    }

Todo.findByIdAndRemove(id).then((todo)=>{
    if(Todo){
        return res.status(200).send({todo});
    }
    res.status(404).send();
}).catch((e)=>{
res.status(404).send();
})});

app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text','completed']);
    if(!ObjectId.isValid(id)){
    return res.status(404).send();
}
if(_.isBoolean(body.completed)&&body.completed){
body.completedAt =new Date().getTime();
}
else{
body.completed = false;
body.completedAt = null;
}

Todo.findOneAndUpdate(id,{$set : body},{new:true}).then((todo)=>{
if(!todo){
    return res.status(404).send();
}
res.status(200).send({todo});
}).catch((e)=>{

    res.status(400).send();
}
)}),

app.post('/users',(req,res)=>{
    var body = _.pick(req.body,['email','password']);
     var user = new User(body); 
     user.save().then(() =>{
      return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((e) =>{
        res.status(400).send(e);
    })});

app.get('/users/me',authenticate,(req,res)=>{
   

        res.send(req.user);
  
})
app.listen(port,(() =>{
    console.log("url is working properly on"+port);
}) )