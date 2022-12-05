'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    surname: { type: String, lowercase: true },
    firstname: { type: String, lowercase: true },
    lastname: { type: String, lowercase: true },
    phone: { type: String },
    email: { type: String, trim: true, lowercase: true },
    agegroup: { type: String, trim: true, lowercase: true },
    country: { type: String, lowercase: true },
    state: { type: String, lowercase: true },
    gender: { type: String },
    education: { type: String },
    worktype: { type: String, lowercase: true },
    photo: { type: String },
    userId: { type: String }

});

exports.default = _mongoose2.default.model('users', userSchema);
//# sourceMappingURL=user.js.map