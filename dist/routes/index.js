"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _errorHandler = require("../handlers/errorHandler");

var _user = require("../controllers/user");

var _user2 = _interopRequireDefault(_user);

var _admin = require("../controllers/admin");

var _admin2 = _interopRequireDefault(_admin);

var _contactus = require("../controllers/contactus");

var _contactus2 = _interopRequireDefault(_contactus);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var imageUpload = _config2.default.upload;

router.post("/api/v1/user/register", imageUpload.single("photo"), _user2.default.createNewUser);
router.get("/api/v1/user/:id", (0, _errorHandler.catchErrors)(_user2.default.getUser));
router.get("/api/v1/users", (0, _errorHandler.catchErrors)(_user2.default.getAllUsers));
router.delete("/api/v1/user/delete/:id", (0, _errorHandler.catchErrors)(_user2.default.deleteUser));
router.put("/api/v1/user/update/:id", (0, _errorHandler.catchErrors)(_user2.default.updateUser));

//admin geting data
router.get("/api/v1/m/users", (0, _errorHandler.catchErrors)(_user2.default.findRegisteredMale));
router.get("/api/v1/f/users", (0, _errorHandler.catchErrors)(_user2.default.findRegisteredFemale));
router.get("/api/v1/ng/users", (0, _errorHandler.catchErrors)(_user2.default.findRegisteredNigerian));

router.post("/api/v1/admin/register", _admin2.default.newAdmin);
router.post("/api/v1/admin/login", _admin2.default.loginAdmin);
router.get("/api/v1/admin/:id", (0, _errorHandler.catchErrors)(_admin2.default.getAdmin));
router.get("/api/v1/admins", (0, _errorHandler.catchErrors)(_admin2.default.getAdmins));
router.delete("/api/v1/admin/delete/:id", (0, _errorHandler.catchErrors)(_admin2.default.deleteAdmin));
router.put("/api/v1/admin/update/:id", (0, _errorHandler.catchErrors)(_admin2.default.updateAdmin));
// contactus

router.post('/api/v1/contactus', _contactus2.default.createContactUs);
router.get('/api/v1/contactus', _contactus2.default.getAllContactus);
router.get('/api/v1/contactus/:id', _contactus2.default.getSingleContactus);
router.delete('/api/v1/contactus/:id', _contactus2.default.DeleteContactus);
exports.default = router;
//# sourceMappingURL=index.js.map