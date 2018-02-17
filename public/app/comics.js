angular.module('app')
.component('comicsView', {
  bindings: {
    comic: '<'
  },
  template: `
    <div class="comics">
      <div>
        <img ng-src={{$ctrl.comic.img}}></img>
        <div>
          <h3>{{$ctrl.comic.title}}</h3>
          <div>'{{$ctrl.comic.alt}}'</div>
        </div>
      </div>
    </div>
  `
})
