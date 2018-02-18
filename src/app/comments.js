angular.module('app')
.component('commentsView', {
  bindings: {
    comments: '<',
  },
  template: `
    <div class="comments" align=center>
      <comment-view
        ng-repeat="comment in $ctrl.comments.slice().reverse()"
        comment="comment"
      ></comment-view>
    </div>
  `
})