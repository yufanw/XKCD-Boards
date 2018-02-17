var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComicSchema = new Schema({
  img: {type: String, unique: true},
  num: {type: Number, unique: true},
  title: String,
  year: String
})

module.exports = mongoose.model('Comic', ComicSchema);