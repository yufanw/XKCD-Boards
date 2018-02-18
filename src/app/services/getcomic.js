var XKCD = 'http://xkcd.com';

var uri = window.location.href;

angular.module('app')
.service('getComic', function($http) {
  this.getRandom = function(cb) {
    $http({
      method: "GET",
      url: uri + "/api/random",
    }).then(function success(result) {
      cb(result.data);
    }, function error(result) {
      console.log('error', result);
    });
  };

  this.getLatest = function(cb) {
    $http({
      method: "GET",
      url: uri + "/api/latest",
    }).then(function success(result) {
      cb(result.data);
    }, function error(result) {
      console.log('error', result);
    });
  };

})