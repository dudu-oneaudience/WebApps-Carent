var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();



// config files
var db = require('./config/db');

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
//app.use(methodOverride('X-HTTP-Method-Override'));

app.use('/',express.static(path.join(__dirname, '../Client')));
routes(app);

// route to handle creating goes here (app.post)
// route to handle delete goes here (app.delete)

// frontend routes =========================================================


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.status('error').json({
//    message: err.message,
//    error: {}
//  });
//});

module.exports = app;