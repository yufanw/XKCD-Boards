var Comic = require('../models/comics');
var Comment = require('../models/comments');
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

  router.post('/comments', function(req, res) {
    let body = '';
    req.on('data', function(comment) {
      body += comment;
      console.log(body);
      Comment.saveComment(body);
    }).on('end', function() {
      res.send(body);
    });
  });


  return router;
};
