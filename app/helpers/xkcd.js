var requestPromise = require('request-promise');

var XKCD = 'http://xkcd.com/';

module.exports = {
  get : function(number, callback) {
    getComic(number, callback);
  },
  latest : function(callback) {
    requestPromise({
      url     : XKCD + '/info.0.json',
      json    : true
    }).then(function(comic) {
      callback(comic);
    });
  },
  random : function(callback) {
    requestPromise({
      url     : XKCD + '/info.0.json',
      json    : true
    }).then(function(comic) {
      var current = comic.num;
      getComic(getRandomInt(1, current), callback);
    });
  }
}

function getComic(number, callback) {
  requestPromise({
    url     : XKCD + number + '/info.0.json',
    json    : true
  }).then(function(comic) {
    callback(comic)
  }).catch(function(err){
    console.log(err);
  });
}

function getRandomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}