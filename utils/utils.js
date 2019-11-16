import dotenv from 'dotenv';
import validator from 'validator';
import mongoose from 'mongoose';

dotenv.config();

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

//export const setSecure = env => (env === 'development' ? false : true);
export const setMongoURI = env =>
  env === 'development'
    ? 'mongodb://localhost:27017/findmypetdb'
    : process.env.MONGO_URI;

export const validateRegister = userInfo => {
  const errors = {};
  userInfo.username = userInfo.username || '';
  userInfo.password = userInfo.password || '';
  userInfo.email = userInfo.email || '';
  userInfo.phone = userInfo.phone || '';
  if (!validator.isLength(userInfo.username, { min: 6, max: 10 })) {
    errors.username = 'Username must between 6 and 10 characters.';
  }
  if (!validator.isLength(userInfo.password, { min: 7, max: 20 })) {
    errors.password = 'Password must be between 7 and 20 characters.';
  }
  if (!validator.isEmail(userInfo.email)) {
    errors.email = 'Invalid email.';
  }
  if (!validator.isMobilePhone(userInfo.phone)) {
    errors.phone = 'Invalid phone number.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export const connectMongo = url => {
  return mongoose.connect(setMongoURI(process.env.NODE_ENV), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
};
