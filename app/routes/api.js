var Comic = require('../models/comics');
var xkcd = require('../helpers/xkcd');

module.exports = function(router) {
  router.post('*', function(req, res) {
    xkcd.random(function(result) {
      Comic.save(JSON.stringify(result));
      res.send(JSON.stringify(result));
    });
  });

  router.get('/favicon.ico', function(req, res) {
    res.status(200).send('No favicon');
  });

  router.get('/comics', function(req, res) {
    res.status(200).send('Hello');
  });

  return router;
};