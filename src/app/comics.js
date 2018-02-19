angular.module('app')
.component('comicsView', {
  bindings: {
    comic: '<'
  },
  templateUrl: 'app/views/templates/comics.html'
})
