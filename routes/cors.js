const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'https://localhost:3443', 'http://localhost:4200'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    // check if origin is in whitelist
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

// default replies with Allow-Access-Control-Origin: *
exports.cors = cors();

// reply with own config
exports.corsWithOptions = cors(corsOptionsDelegate);