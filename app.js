var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dishRouter = require('./routes/dishRouter');
var leaderRouter = require('./routes/leaderRouter');
var promoRouter = require('./routes/promoRouter');

var app = express();

const Dishes = require('./models/dishes');
const Promotions = require('./models/promotions');
const Leaders = require('./models/leaders');
const vars = require('./vars');

const connect = mongoose.connect(vars.MONGO_URL, {useNewUrlParser: true});
connect.then((db) => {
  console.log('Connected correctly to db server');
}, (err) => { console.log(err) });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('12345-67890-09876-54321'));

// basic auth
function auth(req, res, next) {
  console.log(req.signedCookies);

  // if user does not have signed cookie
  if (!req.signedCookies.user) {

    // ask for basic auth
    let authHeader = req.headers.authorization;
    if (!authHeader) {
      let err = new Error('You are not authenticated!');

      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
    }

    let auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    let username = auth[0];
    let password = auth[1];

    // give admin cookie if given correct credentials
    if (username === 'admin' && password === 'password') {
      res.cookie('user', 'admin', { signed: true });
      next();
    }
    else {
      let err = new Error('You entered the wrong user or password!');

      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
    }
  }
  // has signed cookie
  else {
    // check if user is admin
    if (req.signedCookies.user === 'admin') {
      next();
    }
    else {
      let err = new Error('You are not admin!');

      err.status = 401;
      return next(err);
    }
  }
}

app.use(auth);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
