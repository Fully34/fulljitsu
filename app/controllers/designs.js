var express = require('express'),
  router = express.Router(),
  constants = require('../data/site_constants');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/designs', function (req, res, next) {
    res.render('designs/index', {
      title: 'Designs',
      pages: constants.design_pages,
      getName: constants.getName
    });
});

router.get('/designs/landing', function (req, res, next) {
    res.render('designs/landing/index', {
      title: 'Designs-Landing Page'
    });
});

router.get('/designs/demo', function (req, res, next) {
    res.render('designs/demo/index', {
      title: 'Designs-Demo Page'
    });
});

router.get('/designs/blog', function (req, res, next) {
    res.render('designs/blog/index', {
      title: 'Designs-Blog Page'
    });
});

router.get('/designs/tutorial', function (req, res, next) {
    res.render('designs/tutorial/index', {
      title: 'Designs-Tutorial Page'
    });
});
