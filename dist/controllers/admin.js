"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _admin = require("../services/admin");

var _admin2 = _interopRequireDefault(_admin);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminController = function () {
    function AdminController() {
        _classCallCheck(this, AdminController);
    }

    _createClass(AdminController, null, [{
        key: "newAdmin",
        value: async function newAdmin(req, res) {
            try {
                var _req$body = req.body,
                    name = _req$body.name,
                    email = _req$body.email,
                    password = _req$body.password;

                if (!name || !email || !password) {
                    return res.status(400).json({
                        message: "No empty field is required"
                    });
                } else {
                    var hashed = _bcryptjs2.default.hashSync(password, 10);
                    var info = await _admin2.default.newAdmin(req.body);
                    info.password = hashed;
                    await info.save();
                    return res.status(201).json({
                        message: "created"
                    });
                }
            } catch (e) {
                return res.status(500).json({
                    error: e.message
                });
            }
        }
    }, {
        key: "getAdmin",
        value: async function getAdmin(req, res) {
            try {
                var _id = req.params.id;
                console.log("test " + _id);
                var info = await _admin2.default.getAdmin({ _id: _id });
                if (!info) {
                    return res.status(400).json({
                        message: "not found"
                    });
                } else {
                    return res.status(200).json({
                        info: info,
                        message: 'success'
                    });
                }
            } catch (e) {
                return res.json({
                    error: e.message
                });
            }
        }
    }, {
        key: "loginAdmin",
        value: async function loginAdmin(req, res) {
            try {
                var _req$body2 = req.body,
                    email = _req$body2.email,
                    password = _req$body2.password;

                if (!email || !password) {
                    return res.status(400).json({
                        message: "No empty field"
                    });
                } else {
                    var Admin = await _admin2.default.getAdminEmail({ email: email });
                    if (!Admin) {
                        return res.status(400).json({
                            message: "wrong password/email"
                        });
                    } else {
                        var passwordIsValid = _bcryptjs2.default.compareSync(password, Admin.password);
                        if (!passwordIsValid) {
                            return res.status(400).json({
                                message: "wrong password/email"
                            });
                        } else {
                            var token = await _jsonwebtoken2.default.sign({ _id: Admin._id, email: Admin.email, name: Admin.name }, _config2.default.Admin_secret);
                            return res.status(200).json({
                                message: "successful",
                                token: token,
                                id: Admin._id,
                                code: "OK"
                            });
                        }
                    }
                }
            } catch (e) {
                return res.status(500).json({
                    error: e.message
                });
            }
        }
    }, {
        key: "getAdmins",
        value: async function getAdmins(req, res) {
            try {
                var info = await _admin2.default.getAdmins();
                if (info.length < 0) {
                    return res.status(400).json({
                        message: "length 0"
                    });
                }
                return res.status(200).json({
                    info: info
                });
            } catch (e) {
                return res.status(500).json({
                    error: e.message
                });
            }
        }
    }, {
        key: "deleteAdmin",
        value: async function deleteAdmin(req, res) {
            try {
                var id = req.params.id;

                var info = await _admin2.default.deleteAdmin(id);
                if (!info) {
                    return res.status(400).json({
                        message: "Not found"
                    });
                } else {
                    return res.status(200).json({
                        message: "deleted"
                    });
                }
            } catch (e) {
                return res.status(500).json({
                    error: e.message
                });
            }
        }
    }, {
        key: "updateAdmin",
        value: async function updateAdmin(req, res) {
            try {
                var id = req.params.id;

                var info = await _admin2.default.getAdmin(id);
                if (!info) {
                    return res.status(400).json({
                        message: "Not found"
                    });
                } else {
                    var _req$body3 = req.body,
                        email = _req$body3.email,
                        name = _req$body3.name;

                    info.email = email || info.email;
                    info.name = name || info.name;
                    await info.save();
                    return res.status(200).json({
                        message: "updated"
                    });
                }
            } catch (e) {
                return res.status(500).json({
                    error: e.message
                });
            }
        }
    }]);

    return AdminController;
}();

exports.default = AdminController;
//# sourceMappingURL=admin.js.map