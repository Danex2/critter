import mongoose from 'mongoose';
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
      date: {
        type: Date,
        default: Date.now
      },
      location: {
        lat: {
          type: String,
          required: true
        },
        long: {
          type: String,
          required: true
        }
      }
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

const Pet = mongoose.model('pet', PetSchema);
export default Pet;
