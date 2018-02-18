angular.module('app')
.component('comicsView', {
  bindings: {
    comic: '<'
  },
  template: `
    <div class="comics">
      <div>
        <div class="comicimg">
          <img ng-src={{$ctrl.comic.img}}></img>
        </div>
        <div>
          <h2>{{$ctrl.comic.title}}</h3>
          <div class="alt">'{{$ctrl.comic.alt}}'</div>
        </div>
      </div>
    </div>
  `
})
