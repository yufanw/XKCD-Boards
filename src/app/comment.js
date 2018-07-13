angular.module("app").component("commentView", {
  bindings: {
    comment: "<"
  },
  template: `
    <div class='comment'>
      {{$ctrl.comment.name || 'Anonymous'}}: 
      <div class="message">
        {{$ctrl.comment.text}}
      </div>
    </div>
  `
});
