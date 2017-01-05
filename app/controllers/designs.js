var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/designs', function (req, res, next) {
    res.render('designs/index', {
      title: 'Designs'
    });
});
