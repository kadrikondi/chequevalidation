'use strict';

var _contactus = require('../models/contactus');

var _contactus2 = _interopRequireDefault(_contactus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//create contactus
exports.createContactUs = async function (req, res) {
    try {
        var _req$body = req.body,
            message = _req$body.message,
            subject = _req$body.subject,
            username = _req$body.username,
            email = _req$body.email;

        if (!message || !subject || !username || !email) {
            return res.json({
                message: 'Enter a all field'
            });
        } else {
            var info = await _contactus2.default.create(req.body);
            return res.status(201).json({
                message: "message sent successfully",
                info: info
            });
        }
    } catch (e) {
        logger.error('ContactUs Message error: ' + e.message);
        return res.status(500).json({
            code: 'SERVER_ERROR',
            message: 'something went wrong, Please try again'
        });
    }
};

exports.getAllContactus = async function (req, res) {
    try {
        var info = await _contactus2.default.find().sort({
            "_id": -1
        });
        if (!info) {
            return null;
        } else {
            return res.status(200).json({
                info: info
            });
        }
    } catch (e) {
        logger.error('Contactus error: ' + e.message);
        return res.status(500).json({
            code: 'SERVER_ERROR',
            message: 'something went wrong, Please try again'
        });
    }
};
// get single message

exports.getSingleContactus = async function (req, res) {
    try {
        var id = req.params.id;

        var info = await _contactus2.default.findById({ _id: id });
        if (!info) {
            return res.json({
                message: 'No message found'
            });
        } else {
            return res.status(200).json({
                info: info
            });
        }
    } catch (e) {

        return res.json({
            error: e.message,
            code: "server error get single contactus"

        });
    }
};

//delete mesaage
exports.DeleteContactus = async function (req, res) {
    try {
        var id = req.params.id;

        var info = await _contactus2.default.findOneAndDelete({
            _id: id
        });
        if (!info) {
            return res.json({
                message: 'Not Found'
            });
        } else {
            return res.status(200).json({
                message: ' deleted'
            });
        }
    } catch (e) {

        return res.json({
            error: e.message,
            code: "server error delete message"

        });
    }
};
//# sourceMappingURL=contactus.js.map