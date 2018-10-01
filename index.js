//server

const express = require('express')
const mongojs = require('mongojs') //incliude mongojs
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || '3000';

const db = mongojs('my_server', ['book']); //connect database

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/api/book', function (reg, res) { //sent data from server to app.js (pass docs) 

    db.book.find({}, function (err, docs) { //query database
        res.send(docs);
    });

})

app.post('/api/book', function (req, res) {
    db.book.insert(req.body, function (err, docs) { //query database keep data in database
        res.send(docs);
    });

});

const server = app.listen(PORT, function () {
    console.log(`server is running at http://localhost:${PORT}`);
})
