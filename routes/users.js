var express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const User = require('../models/users');
const authenticate = require('../authenticate');
const cors = require('./cors');

var router = express.Router();
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', cors.corsWithOptions, function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', cors.corsWithOptions, (req, res, next) => {
  User.register(new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }), 
  req.body.password,
  (err, user) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({ err });
    }
    else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'Registration Successful' });
      });
    }
  });
});

router.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
  // generate a token
  let token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({
    success: true,
    token: token,
    status: 'You are successfully logged in',
    username: req.body.username,
    firstName: req.user.firstName,
    lastName: req.user.lastName
  });
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    let err = new Error('You are not logged in!');
    err.status = 401;
    next(err);
  }
});

module.exports = router;
