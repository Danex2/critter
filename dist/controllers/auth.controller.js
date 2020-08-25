"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.login = void 0;

var _User = _interopRequireDefault(require("../models/User.model"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const login = async (req, res) => {
  try {
    const {
      username,
      password
    } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: 'Missing username or password.'
      });
    }

    const user = await _User.default.findOne({
      username
    });

    if (!user) {
      return res.status(400).json({
        error: 'No one with that username exists.'
      });
    }

    const validPassword = await _bcryptjs.default.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        error: 'Invalid username or password.'
      });
    }

    const token = _jsonwebtoken.default.sign({
      id: user.id
    }, process.env.TOKEN_SECRET, {
      expiresIn: '30m',
      algorithm: 'HS256'
    });

    return res.status(200).json({
      token
    });
  } catch (e) {
    return res.status(500).json(e);
  }
};

exports.login = login;

const register = async (req, res) => {
  try {
    const {
      username,
      password,
      phone,
      email
    } = req.body;

    if (!username || !password || !phone) {
      return res.status(400).json({
        error: 'Missing some registration info.'
      });
    }

    const user = await _User.default.findOne({
      username
    });

    if (user) {
      return res.status(400).json({
        error: 'Someone with that username already exists.'
      });
    }

    const {
      errors,
      isValid
    } = (0, _utils.validateRegister)(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    } // const hashedPassword = await bcrypt.hash(password, 8);


    await _User.default.create({
      username,
      password,
      contactInfo: {
        phone,
        email
      }
    });
    return res.status(201).send(true);
  } catch (e) {
    return res.status(500).json(e);
  }
};

exports.register = register;