angular.module('app')
.controller('formCtrl', function() {
  this.handleClick = () => {
    this.postText();
    this.commentText = '';
  };

  this.handleKeyUp = () => {
    this.postText();
    this.commentText = '';
  };

  this.postText = () => {
    if (this.commentText) {
      let currentNum = this.comic.num;
      this.service.postComment(this.commentText, currentNum, this.comments);
    }
  };
})
.component('commentsForm', {
  controller: 'formCtrl',
  bindings: {
    service: '<',
    comments: '<',
    comic: '<'
  },
  templateUrl: 'app/views/templates/commentsform.html'
});