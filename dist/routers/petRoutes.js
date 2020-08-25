"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _pet = require("../controllers/pet.controller");

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _multer = _interopRequireDefault(require("multer"));

var _multerStorageCloudinary = _interopRequireDefault(require("multer-storage-cloudinary"));

var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_cloudinary.default.config({
  cloud_name: 'dda1jyofd',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = (0, _multerStorageCloudinary.default)({
  cloudinary: _cloudinary.default,
  folder: 'dogs',
  allowedFormats: ['jpg', 'png']
});
const parser = (0, _multer.default)({
  storage
});

const router = _express.default.Router();

router.route('/pets').get(_pet.pets);
router.route('/pet/:id').get(_pet.petId);
router.route('/mypet').get(_checkAuth.default, _pet.myPet);
router.route('/pet').post(_checkAuth.default, parser.single('image'), _pet.pet).put(_checkAuth.default, _pet.updatePet).delete(_checkAuth.default, _pet.deletePet);
var _default = router;
exports.default = _default;