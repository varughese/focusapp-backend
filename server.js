var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    path = require('path');

var config = require('./config');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

app.use(morgan('dev'));

mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useMongoClient: true });

var apiRoutes = require('./api/routes/api.js')(app, express);
app.use('/api', apiRoutes);

app.listen(config.port);
console.log('Magic happening on port', config.port);
