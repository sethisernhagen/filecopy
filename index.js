// Generated by CoffeeScript 1.10.0
(function() {
  var Promise, app, express, file;

  express = require('express');

  app = express();

  Promise = require('bluebird');

  file = require('./file');

  file.save('./test_files/message1.txt', 'What?');

}).call(this);