import express from 'express';
const app = express();
import login from './controllers/login.controller';

const port = process.env.PORT || 4000;

app.use(login);

app.get('/', (req, res) => {
  return res.send('something');
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
