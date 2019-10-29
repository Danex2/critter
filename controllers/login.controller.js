import express from 'express';
const router = express.Router();

router.get('/yeet', (req, res) => {
  return res.send('this is mounted on /yeet');
});

module.exports = router;
