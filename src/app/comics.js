angular.module('app')
.component('comicsView', {
  bindings: {
    comic: '<'
  },
  template: `
    <div class="comics">
      <div>
        <div class="imgContainer">
          <img class="imgComic" ng-src={{$ctrl.comic.img}}></img>
        </div>
        <div>
          <h3>{{$ctrl.comic.title}}</h3>
          <div class="alt">'{{$ctrl.comic.alt}}'</div>
        </div>
      </div>
    </div>
  `
})
