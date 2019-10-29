import mongoose from 'mongoose';
import Schema from mongoose.Schema

const PetSchema = new mongoose.Schema({
  pet: {
    name: {
      type: String,
      required: true
    },
    breed: {
      type: String,
      default: 'N/A'
    },
    lastSeen: {
      date: {
        type: Date,
        default: 'N/A'
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
    found: {
        type: Boolean,
        default: false
    },
    postedBy: {
        type: Schema.Types.ObjectId, ref: 'user'
    }
  }
}, {timestamps: true});

module.exports = Pet = mongoose.model('pet', PetSchema);
