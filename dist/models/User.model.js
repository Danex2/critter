"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const UserSchema = new _mongoose.default.Schema({
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
}, {
  timestamps: true
});
UserSchema.pre('save', async function (next) {
  this.password = await _bcryptjs.default.hash(this.password, 8);
  next();
});

const User = _mongoose.default.model('user', UserSchema);

var _default = User;
exports.default = _default;