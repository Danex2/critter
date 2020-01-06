import NodeGeocoder from 'node-geocoder';
import { GEOCODER_PROVIDER } from 'babel-dotenv';

console.log(
  process.env.GEOCODER_PROVIDER,
  process.env.GEOCODER_API_KEY,
  process.env
);

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null
};

const geocoder = NodeGeocoder(options);

export default geocoder;
