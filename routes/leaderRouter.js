const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
const Leaders = require('../models/leaders');
const authenticate = require('../authenticate');
const cors = require('./cors');

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    // for pre flight requests
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, (req, res, next) => {
        Leaders.find({})
        .then((leaders) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leaders);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Leaders.create(req.body)
        .then((leader) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leader);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders');
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Leaders.deleteMany({})
        .then((leaders) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leaders);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

leaderRouter.route('/:leaderId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, (req, res, next) => {
        Leaders.findById(req.params.leaderId)
        .then((leader) => {
            if (leader != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(leader);
            }
            else {
                err = new Error('Leader ' + req.params.leaderId + ' not found');
                err.status = 404;
                return next(err);
            }
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leaders/' + req.params.leaderId);
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Leaders.findOneAndUpdate({_id: req.params.leaderId}, {
            $set: req.body
        }, { new: true })
        .then((leader) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leader);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Leaders.findOneAndDelete({_id:req.params.leaderId})
        .then((leader) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leader);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = leaderRouter;