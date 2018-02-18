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
  template: `
    <div class=commentsform align=center>
      <textarea type="text"
        ng-model="$ctrl.commentText"
      ></textarea>
      <button class="btn btn-comment"
        ng-click="$ctrl.handleClick()"
      >Add comment</button>
    </div>
  `
});