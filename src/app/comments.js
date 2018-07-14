angular.module("app").component("commentsView", {
  bindings: {
    comments: "<"
  },
  template: `
    <div class="comments" align=center>

      <div
        ng-if="!$ctrl.comments.length"
      >
        <p>There are no comments yet, add some using the form above!</p>
      </div>

      <comment-view
        ng-if="$ctrl.comments.length"
        ng-repeat="comment in $ctrl.comments.slice().reverse() track by comment._id"
        comment="comment"
      ></comment-view>

    </div>
  `
});
