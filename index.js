import app from './app';
import { setMongoURI } from './utils/utils';
import mongoose from 'mongoose';

const port = process.env.PORT || 4000;

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
