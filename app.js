import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
const app = express();
import auth from './routers/authRoutes';
import pet from './routers/petRoutes';
import { setMongoURI } from './utils/utils';

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE']
  })
);
app.use(helmet());

app.use([auth, pet]);

app.get('/', (req, res) => {
  return res.send('something');
});

mongoose
  .connect(setMongoURI(process.env.NODE_ENV), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    app.listen(port, () => console.log(`Server running on port: ${port}`));
  })
  .catch(e => console.log('Something went wrong connecting to the db.'));
