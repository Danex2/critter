import mongoose from "mongoose";
import geocoder from "../utils/geocoder";
const Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    breed: {
      type: String,
      default: "N/A"
    },
    image: {
      type: String,
      required: true
    },
    lastSeen: {
      type: String,
      default: "N/A"
    },
    address: {
      type: String,
      required: true
    },
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ["Point"] // 'location.type' must be 'Point'
      },
      coordinates: {
        type: [Number],
        index: "2dsphere"
      },
      fullAddress: String
    },
    additionalInfo: {
      type: String,
      default: "N/A"
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  },
  { timestamps: true }
);

PetSchema.pre("save", async function(next) {
  const locations = await geocoder.geocode(this.address);
  const canadianProvinces = locations.filter(code => code.countryCode === "CA");
  this.location = {
    type: "Point",
    coordinates: [canadianProvinces[0].latitude, canadianProvinces[0].latitude],
    fullAddress: canadianProvinces[0].formattedAddress
  };
  this.address = undefined;
  next();
});
const Pet = mongoose.model("pet", PetSchema);

export default Pet;
