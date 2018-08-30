var mongoose = require('mongoose');
mongoose.promise = global.promise
mongoose.connect('mongodb://<ankur>:<Ankur3@raj>@ds243325.mlab.com:43325/ankurmongodb'||'mongodb://localhost:27017/TodoApp');
module.exports={mongoose}