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
    Comment.saveComment(req);
    res.sendStatus(201);
  });

  router.get('/comments', function(req, res) {
    Comment.getComments(req.query.comic_id, function(result) {
      console.log(result);
      if (result) {
        res.send(JSON.stringify(result));
      } else {
        res.send();
      }
    })
  })

  return router;
};
