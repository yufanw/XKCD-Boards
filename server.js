var express = require('express');
var app = express();

var PORT = 3000;

app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});