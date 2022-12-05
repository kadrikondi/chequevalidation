import cloudinary from 'cloudinary';
import multer from 'multer';

// CLOUDINARY AND MULTER CONFIGURATION
// cloudinary.config({
//   cloud_name: 'https-vanguardsfortheblackrevolution-com',
//   api_key: 897127371136332,
//   api_secret: 'nXxVSpzo0oD02Mv_JNDBTb8oVj0',
// });

cloudinary.config({
  cloud_name: 'the-blackman-s-revolution',
  api_key: 745863881154919,
  api_secret: '6ZPstBkmei1WmZafbNECd9J8fS8',
});

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpeg|jpg|heic|jpg|bmp|png)$/i)) {
    return cb('Only image files are allowed', false);
  } else {
    cb(null, true);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: imageFilter,
});
// END OF CLOUDINARY AND MULTER CONFIGURATION


export default {
  DB_DEV: 'mongodb://localhost:27017/Revolution',
  DB_DGT: 'mongodb://127.0.0.1:27017/blackrev',
  DB_DGTS: 'mongodb://kadrikondi:kondipress@127.0.0.1:27017/admin?authMechanism=SCRAM-SHA-1&authSource=admin',
  DB_PROD: 'mongodb+srv://blackrevolution:timeBlackRevolution@cluster0.6zumx.mongodb.net/blackrevolution?retryWrites=true&w=majority',
  Admin_secret: 'ghdhfhdydeyudhghdhgdhddyygdhgdjd',
  upload: upload,
  adminloginpage:"https://theblackmanrevolution.com/adminsigninlog",
};

