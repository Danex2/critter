"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _geocoder = _interopRequireDefault(require("../utils/geocoder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const PetSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    default: 'N/A'
  },
  image: {
    type: String,
    required: true
  },
  lastSeen: {
    type: String,
    default: 'N/A'
  },
  address: {
    type: String,
    required: true
  },
  additionalInfo: {
    type: String,
    default: 'N/A'
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
}, {
  timestamps: true
});
PetSchema.pre('save', async function (next) {
  const locations = await _geocoder.default.geocode(this.address);
  const canadianProvinces = locations.filter(code => code.countryCode === 'CA');
  this.address = canadianProvinces[0].formattedAddress;
  const resizedImage = this.image.split('/upload/');
  this.image = `https://res.cloudinary.com/dda1jyofd/image/upload/w_650,h_400/${resizedImage[1]}`;
  next();
});

const Pet = _mongoose.default.model('pet', PetSchema);

var _default = Pet;
exports.default = _default;