"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require("../models/user");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);
    }

    _createClass(UserService, null, [{
        key: "getAllUsers",
        value: async function getAllUsers() {
            try {
                return await _user2.default.find().sort({ "_id": -1 });
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "getAllNgUsers",
        value: async function getAllNgUsers() {
            try {
                return await _user2.default.find({
                    country: 'nigeria'
                }).sort({
                    "_id": -1
                });
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "getAllMale",
        value: async function getAllMale() {
            try {
                return await _user2.default.find({
                    gender: 'Male'
                }).sort({
                    "_id": -1
                });
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "getAllFemale",
        value: async function getAllFemale() {
            try {
                return await _user2.default.find({
                    gender: 'Female'
                }).sort({
                    "_id": -1
                });
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "getSingleUser",
        value: async function getSingleUser(id) {
            try {
                return await _user2.default.findOne({ _id: id });
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "getUserEmail",
        value: async function getUserEmail(email) {
            try {
                return await _user2.default.findOne({ email: email });
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "createNewUser",
        value: async function createNewUser(data) {
            try {
                return await _user2.default.create(data);
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "deleteAUser",
        value: async function deleteAUser(id) {
            try {
                return await _user2.default.findByIdAndRemove(id);
            } catch (e) {
                throw e;
            }
        }
    }]);

    return UserService;
}();

;

exports.default = UserService;
//# sourceMappingURL=user.js.map