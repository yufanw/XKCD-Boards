angular.module('app')
.component('commentView', {
  bindings: {
    comment: '<',
  },
  template: `
    <div class='comment'>
      Anonymous: {{$ctrl.comment.text}}
    </div>
  `
})