var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var Comic = require('./app/models/comics');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/comics', function(err) {
  if (err) {
    console.log('MongoDB not connected', err);
  } else {
    console.log('Connected to database')
  }
});


app.get('/', function(req, res) {
  res.send('Hello');
});

app.post('/comics', function(req, res) {
  var test = new Comic();
  test.img = req.body.img;
  test.num = req.body.num;
  test.title = req.body.title;
  test.year = req.body.year;
  test.save(function(err) {
    if (err) {
      res.send('Comic already exists');
    } else {
      res.send('Comic created');
    }
  });
});

app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});