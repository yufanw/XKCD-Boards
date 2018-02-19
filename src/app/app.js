angular.module('app', [])
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

  this.setComments();

})
.component('appMain', {
  controller: 'AppCtrl',
  template: `
    <div>
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <h2>XKCD RANDOMIZER</h2>
          <button class="btn btn-primary"
            ng-click="$ctrl.setDefault()"
          >Home</button>
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
      </div>
      <footer align=center>
        © Yufan Wang 2018 ||
        <a href="https://github.com/yufanw/MVP">Source Code</a>
      </footer>
    </div>
  `
});
