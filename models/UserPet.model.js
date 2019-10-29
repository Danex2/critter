import mongoose from 'mongoose';

const UserPet = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  contactInfo: {
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      default: 'N/A'
    }
  },
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
    }
  }
});

module.exports = User = mongoose.model('user', UserPet);
