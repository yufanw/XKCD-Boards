angular.module("app").component("commentView", {
  bindings: {
    comment: "<"
  },
  template: `
    <div class='comment'>
      {{$ctrl.comment.name || 'Anonymous'}}: {{$ctrl.comment.text}}
    </div>
  `
});
