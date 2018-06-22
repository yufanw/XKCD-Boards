var uri = window.location.href;

angular.module("app").service("getComic", function($http) {
  this.getRandom = function(cb) {
    $http({
      method: "GET",
      url: uri + "api/random"
    }).then(
      function success(result) {
        cb(result.data);
      },
      function error(result) {
        console.log("error", result);
      }
    );
  };

  this.getLatest = function(cb) {
    $http({
      method: "GET",
      url: uri + "api/latest"
    }).then(
      function success(result) {
        cb(result.data);
      },
      function error(result) {
        console.log("error", result);
      }
    );
  };

  this.postComment = function(name, text, num) {
    $http({
      method: "POST",
      params: {
        name: name,
        text: text,
        comic_id: num
      },
      headers: {
        "Content-Type": "application/json"
      },
      url: uri + "api/comments"
    }).then(
      function success(result) {},
      function error(result) {
        console.error("error", result);
      }
    );
  };

  this.getComments = function(num, cb) {
    $http({
      method: "GET",
      params: {
        comic_id: num
      },
      url: uri + "api/comments"
    }).then(
      function success(result) {
        cb(result.data);
      },
      function error(result) {
        console.error("error", result);
      }
    );
  };
});
