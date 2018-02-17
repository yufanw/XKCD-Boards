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

  this.setNewComic = (comic) => {
    this.currentComic = comic;
  }
})
.component('appMain', {
  controller: 'AppCtrl',
  template: `
    <div>
      <div class = 'page-header'>
        <h5>XKCD Randomizer</h5>
      </div>
      <button class="btn btn-primary"
        ng-click="$ctrl.getcomic.getLatest($ctrl.setNewComic)"
      >Latest</button>
      <button class="btn btn-primary"
        ng-click="$ctrl.getcomic.getRandom($ctrl.setNewComic)"
      >Random</button>
      <button class="btn btn-primary">Add comment</button>
      <comics-view comic="$ctrl.currentComic"></comics-view>
    </div>
  `
});