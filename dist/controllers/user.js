'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require('../services/user');

var _user2 = _interopRequireDefault(_user);

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _qrcode = require('qrcode');

var _qrcode2 = _interopRequireDefault(_qrcode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: 'createNewUser',
    value: async function createNewUser(req, res) {
      try {
        var _req$body = req.body,
            surname = _req$body.surname,
            firstname = _req$body.firstname,
            lastname = _req$body.lastname,
            gender = _req$body.gender,
            email = _req$body.email,
            phone = _req$body.phone,
            agegroup = _req$body.agegroup,
            country = _req$body.country,
            state = _req$body.state,
            education = _req$body.education,
            worktype = _req$body.worktype;

        var emailExist = await _user2.default.getUserEmail(email);
        var userLength = await _user2.default.getAllUsers();
        if (!surname || !firstname || !lastname || !gender || !email || !phone || !agegroup || !country || !state || !education || !worktype) {
          return res.json({
            message: 'All fields are required'
          });
        } else if (emailExist) {
          return res.json({
            message: "Email already exist"
          });
        }
        // else if (req.file == undefined || req.file == '') {
        //   return res.json({
        //     message: `Error: No file selected`
        //   });
        // } 
        else {
            var image = req.body.photo;
            var result = await _cloudinary2.default.uploader.upload(image);
            var imgUrl = result.secure_url;
            var len = userLength.length;
            var info = await _user2.default.createNewUser(req.body);
            var SN;
            if (len === 0) {
              SN = 1;
              info.userId = ' ' + info.country.substring(0, 3) + '/' + info.state.substring(0, 3) + '/' + SN.toString();
              info.photo = imgUrl;
              await info.save();
              var stringdata = JSON.stringify(info);
              var QRCodeOnCodeForImage = await _qrcode2.default.toDataURL(stringdata);
              return res.status(201).json({
                info: info,
                message: 'success',
                barcode: QRCodeOnCodeForImage
              });
            } else {
              SN = len + 1;

              info.userId = info.country.substring(0, 3) + '/' + info.state.substring(0, 3) + '/' + SN.toString();

              info.photo = imgUrl;
              await info.save();
              var _stringdata = JSON.stringify(info);
              var _QRCodeOnCodeForImage = await _qrcode2.default.toDataURL(_stringdata);
              return res.status(201).json({
                info: info,
                message: 'success',
                qrcode: _QRCodeOnCodeForImage
              });
            }
          }
      } catch (e) {
        return res.json({
          error: e.message
        });
      }
    }
  }, {
    key: 'getUser',
    value: async function getUser(req, res) {
      try {
        var id = req.params.id;

        var info = await _user2.default.getSingleUser(id);
        if (!info) {
          return res.status(400).json({
            message: 'Not found'
          });
        } else {
          var stringdata = JSON.stringify(info);
          var QRCodeOnCodeForImage = await _qrcode2.default.toDataURL(stringdata);
          return res.status(200).json({
            info: info,
            qrcode: QRCodeOnCodeForImage
          });
        }
      } catch (e) {
        return res.status(500).json({
          error: e.message
        });
      }
    }
  }, {
    key: 'getAllUsers',
    value: async function getAllUsers(_req, res) {
      try {
        var info = await _user2.default.getAllUsers();
        if (!info) {
          return res.status(400).json({
            message: 'Not found'
          });
        } else {
          return res.status(200).json({
            info: info
          });
        }
      } catch (e) {
        return res.status(500).json({
          error: e.message
        });
      }
    }
  }, {
    key: 'updateUser',
    value: async function updateUser(req, res) {
      try {
        var id = req.params.id;

        var info = await _user2.default.getSingleUser(id);
        if (!info) {
          return res.status(400).json({
            message: 'Not found'
          });
        } else {
          info.surname = req.body.surname || info.surname;
          info.firstname = req.body.firstname || info.firstname;
          info.lastname = req.body.lastname || info.lastname;
          info.gender = req.body.gender || info.gender;
          info.education = req.body.education || info.education;
          info.country = req.body.country || info.country;
          info.state = req.body.state || info.state;
          info.email = req.body.email || info.email;
          info.phone = req.body.phone || info.phone;
          info.age = req.body.age || info.age;
          await info.save();
          return res.status(200).json({
            message: 'User information updated'
          });
        }
      } catch (e) {
        return res.status(500).json({
          error: e.message
        });
      }
    }
  }, {
    key: 'deleteUser',
    value: async function deleteUser(req, res) {
      try {
        var id = req.params.id;

        var info = await _user2.default.deleteAUser(id);
        if (!info) {
          return res.status(400).json({
            message: 'Not found'
          });
        } else {
          return res.status(200).json({
            message: 'User deleted'
          });
        }
      } catch (e) {
        return res.status(500).json({
          error: e.message
        });
      }
    }

    //get all nigerian

  }, {
    key: 'findRegisteredNigerian',
    value: async function findRegisteredNigerian(req, res) {
      try {
        var info = await _user2.default.getAllNgUsers();

        if (!info) {
          return res.status(404).json({
            message: 'No user found'
          });
        } else {
          return res.status(200).json({
            info: info
          });
        }
      } catch (error) {
        logger.error('Get all register  nigeria  error: ' + error.message);
        return res.status(500).json({
          code: 'SERVER_ERROR',
          message: 'something went wrong, Please try again'
        });
      }
    }

    //get all male

  }, {
    key: 'findRegisteredMale',
    value: async function findRegisteredMale(req, res) {
      try {
        var info = await _user2.default.getAllMale();

        if (!info) {
          return res.status(404).json({
            message: 'No user found'
          });
        } else {
          return res.status(200).json({
            info: info
          });
        }
      } catch (error) {
        logger.error('Get all register  nigeria  error: ' + error.message);
        return res.status(500).json({
          code: 'SERVER_ERROR',
          message: 'something went wrong, Please try again'
        });
      }
    }
  }, {
    key: 'findRegisteredFemale',
    value: async function findRegisteredFemale(req, res) {
      try {
        var info = await _user2.default.getAllFemale();

        if (!info) {
          return res.status(404).json({
            message: 'No user found'
          });
        } else {
          return res.status(200).json({
            info: info
          });
        }
      } catch (error) {
        logger.error('Get all register  nigeria  error: ' + error.message);
        return res.status(500).json({
          code: 'SERVER_ERROR',
          message: 'something went wrong, Please try again'
        });
      }
    }
  }]);

  return UserController;
}();

exports.default = UserController;
//# sourceMappingURL=user.js.map