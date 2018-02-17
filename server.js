var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');

var PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/comics', function(err) {
  if (err) {
    console.log('MongoDB not connected', err);
  } else {
    console.log('Connected to database')
  }
});


app.get('/', function(req, res) {
  res.send('Hello World');
})

app.get('/index', function(req,res) {
  res.send('Hello from index');
})

app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});