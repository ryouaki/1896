let express = require('express');
let morgan = require('morgan');
let FileStreamRotator = require('file-stream-rotator');
let fs = require('fs');
let path = require('path')

let app = express();
let logDirectory = path.join(global.rootDir ,'log');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

let accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: logDirectory + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false
});

exports = module.exports = morgan('combined', { stream: accessLogStream });