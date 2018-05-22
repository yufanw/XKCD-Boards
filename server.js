var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
var mDatabase =
  process.env.MONGODB_URI ||
  "mongodb://heroku_98wj9g94:mtalumb98b3emmejo9iq7uceat@ds239648.mlab.com:39648/heroku_98wj9g94";
var cors = require("cors");
var mongoose = require("mongoose");
var router = express.Router();
var appRoutes = require("./app/routes/api")(router);

app.use(cors());
app.use(express.static(__dirname + "/src"));
app.use("/api", appRoutes);

mongoose.connect(mDatabase, function(err) {
  if (err) {
    console.log("MongoDB not connected", err);
  } else {
    console.log("Connected to database");
  }
});

app.get("*", function(req, res, next) {
  res.sendFile(path.join(__dirname + "/src/index.html"));
});

app.listen(PORT, function() {
  console.log("Listening on port", PORT);
});
