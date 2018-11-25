const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all promotions!');
    })
    .post((req, res, next) => {
        res.end('Will add promotion with name: ' + req.body.name +
            ' and description: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('Will delete all promotions!');
    });

promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send promotion: ' + req.params.promoId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promotions/' + req.params.promoId);
    })
    .put((req, res, next) => {
        res.end(
            'Will update promotion: ' + req.params.promoId +
            ' with name: ' + req.body.name +
            ' and description: ' + req.body.description
        );
    })
    .delete((req, res, next) => {
        res.end('Will delete promotion: ' + req.params.promoId);
    });

module.exports = promoRouter;