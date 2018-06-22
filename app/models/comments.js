var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  name: String,
  text: String,
  comic_id: Number
});

let Comment = mongoose.model("Comment", CommentSchema);

module.exports = {
  getComments: function(req, callback) {
    Comment.find({ comic_id: req.query.comic_id }, function(err, comments) {
      if (err) {
        console.log("Error getting comments");
      } else {
        callback(comments);
      }
    });
  },

  saveComment: function(comment) {
    var newComment = {
      name: comment.query.name,
      text: comment.query.text,
      comic_id: comment.query.comic_id
    };

    Comment.create(newComment, function(err) {
      if (err) {
        console.log("Error saving comment");
      } else {
        console.log("Saved new comment");
      }
    });
  }
};
