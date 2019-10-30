import jwt from 'jsonwebtoken';
import fs from 'fs';

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (typeof token !== 'undefined') {
    const privateKey = fs.readFileSync('./private.pem', 'utf8');
    if (token) {
      jwt.verify(token, privateKey, { algorithms: 'HS256' }, (err, decoded) => {
        if (err) {
          return res.status(403).json({ error: 'You are not authorized.' });
        }
        req.data = decoded;
        return next();
      });
    } else {
      return res.status(403).json({ error: 'You are not authorized.' });
    }
  } else {
    return res.status(500).json({
      error: 'Invalid token.'
    });
  }
};

export default checkAuth;
