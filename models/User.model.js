import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: 'pet'
    }
  },
  { timestamps: true }
);

UserSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

const User = mongoose.model('user', UserSchema);
export default User;
