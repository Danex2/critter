"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRegister = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _validator = _interopRequireDefault(require("validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV === 'development' ? _dotenv.default.config() : '';

const isEmpty = value => value === undefined || value === null || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0; //export const setSecure = env => (env === 'development' ? false : true);

/*export const setMongoURI = env => console.log(env);
env === 'development' ? 'mongodb://localhost:27017' : process.env.MONGO_URI;*/


const validateRegister = userInfo => {
  const errors = {};
  userInfo.username = userInfo.username || '';
  userInfo.password = userInfo.password || '';
  userInfo.email = userInfo.email || '';
  userInfo.phone = userInfo.phone || '';

  if (!_validator.default.isLength(userInfo.username, {
    min: 6,
    max: 10
  })) {
    errors.username = 'Username must between 6 and 10 characters.';
  }

  if (!_validator.default.isLength(userInfo.password, {
    min: 7,
    max: 20
  })) {
    errors.password = 'Password must be between 7 and 20 characters.';
  }

  if (!_validator.default.isEmpty(userInfo.email) && !_validator.default.isEmail(userInfo.email)) {
    errors.email = 'Invalid email.';
  }

  if (!_validator.default.isMobilePhone(userInfo.phone)) {
    errors.phone = 'Invalid phone number.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

exports.validateRegister = validateRegister;