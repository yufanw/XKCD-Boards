angular.module('app')
.controller('formCtrl', function() {
  this.handleClick = () => {
    if (this.commentText) {
      let currentNum = this.comic.num;
      this.service.postComment(this.commentText, currentNum, this.comments);
    }
    this.commentText = '';
  }
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