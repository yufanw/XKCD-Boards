var Comic = require('../models/comics');
var xkcd = require('../helpers/xkcd');

module.exports = function(router) {
  router.post('/', function(req, res) {
    xkcd.random(function(result) {
      Comic.save(JSON.stringify(result));
      res.send('Random comic: ' + JSON.stringify(result.title));
    });
  });

  router.get('/', function(req, res) {
    res.send('Hello world');
  });

  return router;
};