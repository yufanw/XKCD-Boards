var Comic = require('../models/comics');
var xkcd = require('../helpers/xkcd');

module.exports = function(router) {
  router.get('/random', function(req, res) {
    xkcd.random(function(result) {
      Comic.save(JSON.stringify(result));
      res.send(JSON.stringify(result));
    });
  });

  router.get('/latest', function(req, res) {
    xkcd.latest(function(result) {
      Comic.save(JSON.stringify(result));
      res.send(JSON.stringify(result));
    });
  });


  return router;
};