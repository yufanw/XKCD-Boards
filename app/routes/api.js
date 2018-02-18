var Comic = require('../models/comics');
var xkcd = require('../helpers/xkcd');

module.exports = function(router) {
  router.post('/random', function(req, res) {
    xkcd.random(function(result) {
      Comic.save(JSON.stringify(result));
      res.send(JSON.stringify(result));
    });
  });

  router.post('/latest', function(req, res) {
    xkcd.latest(function(result) {
      Comic.save(JSON.stringify(result));
      res.send(JSON.stringify(result));
    });
  });

  router.get('/comics', function(req, res) {
    res.status(200).send('Hello');
  });

  return router;
};