angular.module('app')
.controller('comicCtrl', function() {

  this.handleSetHome = () => {
    this.sethome();
  };

  this.handleResetHome = () => {
    this.resethome();
  };
})
.component('comicsView', {
  controller: 'comicCtrl',
  bindings: {
    home: '<',
    comic: '<',
    sethome: '<',
    resethome: '<',
  },
  templateUrl: 'app/views/templates/comics.html'
})
