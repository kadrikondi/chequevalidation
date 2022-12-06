'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CLOUDINARY AND MULTER CONFIGURATION
// cloudinary.config({
//   cloud_name: 'https-vanguardsfortheblackrevolution-com',
//   api_key: 897127371136332,
//   api_secret: 'nXxVSpzo0oD02Mv_JNDBTb8oVj0',
// });

_cloudinary2.default.config({
  cloud_name: 'the-blackman-s-revolution',
  api_key: 745863881154919,
  api_secret: '6ZPstBkmei1WmZafbNECd9J8fS8'
});

var storage = _multer2.default.diskStorage({
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

var imageFilter = function imageFilter(req, file, cb) {
  if (!file.originalname.match(/\.(jpeg|jpg|heic|jpg|bmp|png)$/i)) {
    return cb('Only image files are allowed', false);
  } else {
    cb(null, true);
  }
};
var upload = (0, _multer2.default)({
  storage: storage,
  fileFilter: imageFilter
});
// END OF CLOUDINARY AND MULTER CONFIGURATION


exports.default = {
  DB_DEV: 'mongodb://localhost:27017/Revolution',
  DB_DGT: 'mongodb://127.0.0.1:27017/blackrev',
  DB_DGTS: 'mongodb://kadrikondi:kondipress@127.0.0.1:27017/admin?authMechanism=SCRAM-SHA-1&authSource=admin',
  DB_PROD: 'mongodb+srv://blackrevolution:timeBlackRevolution@cluster0.6zumx.mongodb.net/blackrevolution?retryWrites=true&w=majority',
  Admin_secret: 'ghdhfhdydeyudhghdhgdhddyygdhgdjd',
  upload: upload
};
//# sourceMappingURL=config.js.map