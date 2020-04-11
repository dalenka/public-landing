'use strict';
const path = require('path');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const router = require('./router.js');
const app = express();
const bodyParser = require('body-parser');
// view engine setup

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', router); // To be used later, now empty bloilerplate
app.use(express.static(path.join(__dirname, 'static')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = (req.app.get('env') === 'development') ? err : {};
  //res.locals.error = err;
  // render the error page
  res.status(err.status || 500);
  res.render('error', {locals: res.locals});
  //throw err;
});

module.exports = app;
