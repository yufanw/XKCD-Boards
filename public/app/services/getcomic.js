var XKCD = 'http://xkcd.com';

angular.module('app')
.service('getComic', function($http) {
  this.getRandom = function(cb) {
    $http({
      method: "POST",
      url: "http://127.0.0.1:8081"
    }).then(function success(result) {
      console.log('Got comic:', result.data.title);
      cb(result.data);
    }, function error(result) {
      console.log('error', result);
    });
  };

  this.getLatest = function(cb) {
    console.log('inside get latest');
    $http({
      method: "GET",
      url: XKCD + '/info.0.json',
    }).then(function success(result) {
      cb(result);
    }, function error(result) {
      console.log('error', result);
    });
  };

})