var express = require('express')
var mongojs = require('mongojs')     //
var bodyParser = require('body-parser')
var app = express()
var db = mongojs('my_server',['book']);   //connect database

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/api/book',function(reg,res){

      db.book.find({},function(err,docs){   //query database
           res.send(docs);
      });
      
})

app.post('/api/book',function(req,res){
    db.book.insert(req.body,function(err,docs){   //query database
           res.send(docs);
      });

});

var server = app.listen(3000, function () {
  console.log("server is running")

})

