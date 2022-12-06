"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _admin = require("../models/admin");

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminService = function () {
    function AdminService() {
        _classCallCheck(this, AdminService);
    }

    _createClass(AdminService, null, [{
        key: "newAdmin",
        value: async function newAdmin(data) {
            try {
                return await _admin2.default.create(data);
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "getAdmin",
        value: async function getAdmin(id) {
            try {
                return await _admin2.default.findOne({ _id: id });
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "getAdminEmail",
        value: async function getAdminEmail(email) {
            try {
                return await _admin2.default.findOne(email);
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "getAdmins",
        value: async function getAdmins() {
            try {
                return await _admin2.default.find({}).sort({ "_id": -1 });
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: "deleteAdmin",
        value: async function deleteAdmin(id) {
            try {
                return await _admin2.default.findOneAndRemove({ _id: id });
            } catch (e) {
                throw e;
            }
        }
    }]);

    return AdminService;
}();

;

exports.default = AdminService;
//# sourceMappingURL=admin.js.map