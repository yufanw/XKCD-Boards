var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  text: String,
  comic_id: Number
});

let Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
  getComments: function(comic) {
    Comment.find({comic_id: comic.num})
           .exec((err, results) => {
            return results;
           });
  },

  saveComment: function(comment) {
    comment = JSON.parse(comment);
    var newComment = {
      text: comment.text,
      comic_id: comment.comic_id
    };

    Comment.create(newComment, function(err) {
      if (err) {
        console.log('Error saving comment');
      } else {
        console.log('Saved new comment');
      }
    });
  }

};
