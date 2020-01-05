import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
const app = express();
import auth from './routers/authRoutes';
import pet from './routers/petRoutes';
dotenv.config({ path: './dev.env' });

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
