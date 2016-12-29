var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'fulljitsu'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/fulljitsu-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'fulljitsu'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/fulljitsu-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'fulljitsu'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/fulljitsu-production'
  }
};

module.exports = config[env];
