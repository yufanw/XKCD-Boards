var Comic = require('../models/comics');

module.exports = function(router) {
  router.post('/', function(req, res) {
    xkcd.random(function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        var comic = new Comic()
        comic.img = result.body.img;
        comic.num = result.body.num;
        comic.title = result.body.title;
        comic.year = result.body.year;
        comic.save(function(err) {
          if (err) {
            res.send('Comic already exists');
          } else {
            res.send('Comic created');
          }
        });
      }
    });
  });

  return router;
}