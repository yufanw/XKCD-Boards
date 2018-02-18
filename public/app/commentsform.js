angular.module('app')
.component('commentsForm', {
  template: `
    <div class=commentsform>
      <textarea type="text"
        ng-model="$ctrl.commentText"
      ></textarea>
      <button class="btn-comment">Add comment</button>
    </div>
  `
});