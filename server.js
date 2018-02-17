var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', appRoutes);

mongoose.connect('mongodb://localhost:27017/comics', function(err) {
  if (err) {
    console.log('MongoDB not connected', err);
  } else {
    console.log('Connected to database')
  }
});

app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});