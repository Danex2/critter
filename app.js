import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
import auth from './controllers/auth.controller';

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE']
  })
);

app.use(auth);

app.get('/', (req, res) => {
  return res.send('something');
});

mongoose
  .connect('mongodb://localhost:27017/findmypetdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => console.log(`Server running on port: ${port}`));
  })
  .catch(e => console.log('Something went wrong connecting to the db.'));
