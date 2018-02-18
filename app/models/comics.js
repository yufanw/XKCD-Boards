var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComicSchema = new Schema({
  img: String,
  num: {type: Number, unique: true},
  title: String,
  year: String
})

let Comic = mongoose.model('Comic', ComicSchema);

let save = function(comic) {
  comic = JSON.parse(comic);
  var newComic = {
    img: comic.img,
    num: comic.num,
    title: comic.title,
    year: comic.year,
    alt: comic.alt
  }

  Comic.create(newComic, function(err) {
    if (err) {
      console.log('Comic already exists in database');
    } else {
      console.log('Saved new comic');
    }
  });
}

module.exports.save = save;