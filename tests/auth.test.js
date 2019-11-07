import { mockResponse, mockRequest } from '../utils/mocks';
import { login, register } from '../controllers/auth.controller';
import mongoose from 'mongoose';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

let connection;

beforeAll(async () => {
  connection = await mongoose.connect('mongodb://localhost:27017/testdb', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await connection.disconnect();
});

describe('Testing the authentication routes', () => {
  test('Login should return a 400 status code if the username or password is missing', async done => {
    const req = mockRequest({ username: 'danex2' });
    const res = mockResponse();
    await login(req, res);
    done();
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
