angular.module('app', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://xkcd.com/**'
  ]);
})
.controller('AppCtrl', function(getComic) {
  this.default = {
    img: 'https://imgs.xkcd.com/comics/types.png',
    num: 1537,
    title: 'Types',
    year: '2015',
    alt: 'My new language is great, but it has a few quirks'
  };
  this.currentComic = this.default;
  this.getcomic = getComic;
  this.commentText = '';
  this.comments = [];

  this.setNewComic = (comic) => {
    this.currentComic = comic;
    this.setComments();
  };

  this.setNewComments = (comments) => {
    this.comments = comments;
  };

  this.setDefault = () => {
    this.currentComic = this.default;
    this.setComments();
  };

  this.setComments = () => {
    this.getcomic.getComments(this.currentComic.num, this.setNewComments);
  };

  let setComments = this.setComments.bind(this);
  setInterval(function() { setComments() }, 1000);

})
.component('appMain', {
  controller: 'AppCtrl',
  templateUrl: 'app/views/templates/app.html'
});
