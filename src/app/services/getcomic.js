var XKCD = 'http://xkcd.com';

angular.module('app')
.service('getComic', function($http) {
  this.getRandom = function(cb) {
    $http({
      method: "POST",
      url: "http://127.0.0.1:8081/random"
    }).then(function success(result) {
      cb(result.data);
    }, function error(result) {
      console.log('error', result);
    });
  };

  this.getLatest = function(cb) {
    $http({
      method: "POST",
      url: "http://127.0.0.1:8081/latest",
    }).then(function success(result) {
      cb(result.data);
    }, function error(result) {
      console.log('error', result);
    });
  };

})