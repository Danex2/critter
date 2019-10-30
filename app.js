import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import cookie from 'cookie-parser';
const app = express();
import auth from './controllers/auth.controller';
import { setMongoURI } from './utils/utils';

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true
  })
);
app.use(cookie());
app.use(helmet());

app.use(auth);

app.get('/', (req, res) => {
  return res.send('something');
});

app.get('/secure', (req, res) => {
  console.log(req.cookies);
  return res.send('cookies');
});

mongoose
  .connect(setMongoURI(process.env.NODE_ENV), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => console.log(`Server running on port: ${port}`));
  })
  .catch(e => console.log('Something went wrong connecting to the db.'));
