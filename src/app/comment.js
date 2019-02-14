angular.module("app").component("commentView", {
  bindings: {
    comment: "<"
  },
  template: `
    <div class='comment'>
      <div class="comment-name">
        {{$ctrl.comment.name || 'anonymous'}}: 
      </div>
      <div class="message">
        <div class="text">
          {{$ctrl.comment.text}}
        </div>
      </div>
    </div>
  `
});
