var Goal = require('../models/goal'),
    config = require('../../config'),
    jwt = require('jsonwebtoken');

module.exports = function(app, express) {
    var apiRouter = express.Router();

    require("./goals")(apiRouter);

    return apiRouter;
};
