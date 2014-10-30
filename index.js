var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/api/book',function(reg,res){
      var books = [
           {title: 'Angular' ,price: 800},
           {title: 'Node.jd' ,price: 600},
           {title: 'CSS' ,price: 400}
      ];
      res.send(books);
})

var server = app.listen(3000, function () {

  console.log("server is running")

})