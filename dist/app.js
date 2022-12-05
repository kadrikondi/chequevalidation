"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _expressMongoSanitize = require("express-mongo-sanitize");

var _expressMongoSanitize2 = _interopRequireDefault(_expressMongoSanitize);

var _xssClean = require("xss-clean");

var _xssClean2 = _interopRequireDefault(_xssClean);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _expressRateLimit = require("express-rate-limit");

var _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);

var _compression = require("compression");

var _compression2 = _interopRequireDefault(_compression);

var _helmet = require("helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _errorHandler = require("./handlers/errorHandler");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _os = require("os");

var _os2 = _interopRequireDefault(_os);

var _cluster = require("cluster");

var _cluster2 = _interopRequireDefault(_cluster);

var _index = require("./routes/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var pid = process.pid;
var PORT = process.env.PORT || 7000;

var limiter = new _expressRateLimit2.default({
    windowMs: 15 * 60 * 1000, // 15 minutes 
    max: 1000, // limit each IP to 1000 requests per windowMs 
    delayMs: 0 // disable delaying — full speed until the max limit is  reached
});
if (_cluster2.default.isMaster) {
    var n_cpus = _os2.default.cpus().length;
    console.log("Forking " + n_cpus + " CPUS");
    console.log("Master has " + process.pid + " process running");
    for (var i = 0; i < n_cpus; i++) {
        _cluster2.default.fork();
    }
} else {
    app.use((0, _cors2.default)());

    app.use((0, _helmet2.default)());
    app.use((0, _compression2.default)()); // compress all incoming data
    app.use(_express2.default.json({ limit: '100kb' })); // limit body payload to 100kb
    app.use((0, _expressMongoSanitize2.default)()); // data sanitization against NoSQL injection attacks
    app.use((0, _xssClean2.default)()); // data sanitization against XSS attacks (cross-site scripting)
    app.use(_bodyParser2.default.json());

    app.use((0, _morgan2.default)('dev'));
    app.use(_errorHandler2.default.developmentErrors); //catch development errors
    app.use(_bodyParser2.default.urlencoded({ extended: true }));
    app.use((0, _cookieParser2.default)());
    app.use(limiter); // setting limiter on routes, preventing DOS attack
    app.use('/', _index2.default);

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        next();
    });

    // if (process.env.NODE_ENV === 'production') {
    app.use(_express2.default.static(_path2.default.join(__dirname, '../blackrevclient/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(_path2.default.join(__dirname, '../blackrevclient/build', 'index.html'));
    });

    // catch production errors
    app.use(_errorHandler2.default.productionErrors);
    // }

    app.listen(PORT, function () {
        _mongoose2.default.connect(_config2.default.DB_DEV, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, res) {
            try {
                console.log('Connected to Database');
            } catch (err) {
                throw err;
            }
        });
        console.log("App started on " + PORT + " using process " + pid);
    });
}
_cluster2.default.on('exit', function (worker) {
    console.log("Worker, " + worker.id + " is no more");
    _cluster2.default.fork();
});

exports.default = app;
//# sourceMappingURL=app.js.map