import User from '../models/User.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validateRegister } from '../utils/utils';
import fs from 'fs';

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!username || !password) {
      return res.status(400).json({
        error: 'Missing username or password.'
      });
    }
    if (!user) {
      return res.status(400).json({
        error: 'No one with that username exists.'
      });
    }
    const checkPassword = await bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({
        error: 'Invalid username or password.'
      });
    }
    const privateKey = fs.readFileSync('./private.pem', 'utf8');
    const token = jwt.sign(
      {
        id: user.id
      },
      privateKey,
      { expiresIn: '10m', algorithm: 'HS256' }
    );
    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json(e);
  }
};

const register = async (req, res) => {
  try {
    const { username, password, phone, email } = req.body;
    if (!username || !password || !phone) {
      return res.status(400).json({
        error: 'Missing some registration info.'
      });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        error: 'Someone with that username already exists.'
      });
    }
    /*const { errors, isValid } = validateRegister(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }*/
    await User.create({
      username,
      password,
      contactInfo: {
        phone,
        email
      }
    });
    return res.status(201).send(true);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export { login, register };
