'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseMongodbErrors = require('mongoose-mongodb-errors');

var _mongooseMongodbErrors2 = _interopRequireDefault(_mongooseMongodbErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contactus = new _mongoose2.default.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    subject: {
        type: String,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        trim: true,
        lowercase: true
    },
    username: {
        type: String,
        trim: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
});
Contactus.plugin(_mongooseMongodbErrors2.default);
exports.default = _mongoose2.default.model('contactus', Contactus);
//# sourceMappingURL=contactus.js.map