var express = require('express');
var app = express();


app.get('/', function(req, res) {
  console.log('Get request served');
  res.send('Hello World');
})

app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port', process.env.PORT || 3000);
});