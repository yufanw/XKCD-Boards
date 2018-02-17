var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8081;
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(appRoutes);

mongoose.connect('mongodb://localhost:27017/comics', function(err) {
  if (err) {
    console.log('MongoDB not connected', err);
  } else {
    console.log('Connected to database')
  }
});

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});