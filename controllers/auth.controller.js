import express from 'express';
import User from '../models/User.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import { setSecure } from '../utils/utils';
const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const privateKey = fs.readFileSync('./private.pem', 'utf8');
    const user = await User.findOne({ username });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!username || !password) {
      return res.status(400).json({
        error: 'Missing username or password.'
      });
    }
    if (!checkPassword) {
      return res.status(400).json({
        error: 'Invalid username or password.'
      });
    }
    const token = jwt.sign(
      {
        id: user.id
      },
      privateKey,
      { expiresIn: '30m', algorithm: 'HS256' }
    );
    return res
      .cookie('token', token, {
        maxAge: 1800000,
        secure: setSecure(process.env.NODE_ENV),
        sameSite: true
      })
      .status(200)
      .json({ token });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/register', async (req, res) => {
  try {
    const { username, password, phone, email } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        error: 'Someone with that username already exists.'
      });
    }
    if (!username || !password || !phone) {
      return res.status(400).json({
        error: 'Missing some registration info.'
      });
    }
    const hashedPassword = bcrypt.hashSync(password, 8);
    await User.create({
      username,
      password: hashedPassword,
      contactInfo: {
        phone,
        email
      }
    });
    return res.status(201).send(true);
  } catch (e) {
    return res.status(500).json(e);
  }
});

export default router;
