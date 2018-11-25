const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all leaders!');
    })
    .post((req, res, next) => {
        res.end('Will add leader with name: ' + req.body.name +
            ' and description: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders');
    })
    .delete((req, res, next) => {
        res.end('Will delete all leaders!');
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send leader: ' + req.params.leaderId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leaders/' + req.params.leaderId);
    })
    .put((req, res, next) => {
        res.end(
            'Will update leader: ' + req.params.leaderId +
            ' with name: ' + req.body.name +
            ' and description: ' + req.body.description
        );
    })
    .delete((req, res, next) => {
        res.end('Will delete leader: ' + req.params.leaderId);
    });

module.exports = leaderRouter;