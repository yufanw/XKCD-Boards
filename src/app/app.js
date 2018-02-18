angular.module('app', [])
.controller('AppCtrl', function(getComic) {
  this.currentComic = {
    img: 'https://imgs.xkcd.com/comics/types.png',
    num: 1537,
    title: 'Types',
    year: '2015',
    alt: 'My new language is great, but it has a few quirks'
  };
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

  this.setComments = () => {
    this.getcomic.getComments(this.currentComic.num, this.setNewComments);
  };

  this.setComments();

})
.component('appMain', {
  controller: 'AppCtrl',
  template: `
    <div>
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <h2>XKCD Randomizer</h2>
          <button class="btn btn-primary"
            ng-click="$ctrl.getcomic.getLatest($ctrl.setNewComic)"
          >Latest</button>
          <button class="btn btn-primary"
            ng-click="$ctrl.getcomic.getRandom($ctrl.setNewComic)"
          >Random</button>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <comics-view
            comic="$ctrl.currentComic"
          ></comics-view>
        </div>
        <div class="col-md-5">
          <comments-form
            comic="$ctrl.currentComic"
            comments="$ctrl.setComments"
            service="$ctrl.getcomic"
          ></comments-form>
          <comments-view
            comments="$ctrl.comments"
          ></comments-view>
        </div>
      <div>
    </div>
  `
});
