import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
const app = express();
import auth from './routers/authRoutes';
import pet from './routers/petRoutes';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'PUT', 'POST', 'DELETE']
  })
);
app.use(helmet());

app.use([auth, pet]);

export default app;
