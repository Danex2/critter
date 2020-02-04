import mongoose from 'mongoose';
import geocoder from '../utils/geocoder';
const Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

PetSchema.pre('save', async function(next) {
  const locations = await geocoder.geocode(this.address);
  const canadianProvinces = locations.filter(code => code.countryCode === 'CA');
  this.address = canadianProvinces[0].formattedAddress;
  const resizedImage = this.image.split('/upload/');
  this.image = `https://res.cloudinary.com/dda1jyofd/image/upload/w_650,h_400/${resizedImage[1]}`;
  next();
});
const Pet = mongoose.model('pet', PetSchema);

export default Pet;
