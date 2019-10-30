import jwt from 'jsonwebtoken';
import fs from 'fs';

const checkAuth = (req, res, next) => {
  const token = req.headers['x-access-token'];
  const privateKey = fs.readFileSync('./private.pem', 'utf8');
  if (token) {
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'You are not authorized.' });
      }
      req.data = decoded;
      next();
    });
  } else {
    res.status(403).json({ error: 'You are not authorized.' });
  }
};

export default checkAuth;
