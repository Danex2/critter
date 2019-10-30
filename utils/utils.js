import dotenv from 'dotenv';

dotenv.config();

export const setSecure = env => (env === 'development' ? false : true);
export const setMongoURI = env =>
  env === 'development'
    ? 'mongodb://localhost:27017/findmypetdb'
    : process.env.MONGO_URI;
