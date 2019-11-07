import { mockResponse, mockRequest } from '../utils/mocks';
import { login, register } from '../controllers/auth.controller';
import User from '../models/User.model';
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
  await User.deleteMany({});
  await connection.disconnect();
});

describe('Testing the authentication routes', () => {
  describe('Testing the login route', () => {
    test('Login should return a 400 status code if the username or password is missing', async done => {
      const req = mockRequest({ username: 'danex2' });
      const res = mockResponse();
      await login(req, res);
      done();
      expect(res.status).toHaveBeenCalledWith(400);
    });
    test('Login should return a 400 status code if the passwords do not match', async done => {
      const req = mockRequest({ username: 'Danex2', password: 'passwor' });
      const res = mockResponse();
      await User.create({
        username: 'Danex2',
        password: 'password',
        contactInfo: {
          phone: '123-456-7890'
        }
      });
      await login(req, res);
      done();
      expect(res.status).toHaveBeenCalledWith(400);
    });
    test('Login should return a 400 status code if no user is found', async done => {
      const req = mockRequest({
        username: 'someusernamethatdoesnotexist',
        password: 'somepassword'
      });
      const res = mockResponse();
      await login(req, res);
      done();
      expect(res.status).toHaveBeenCalledWith(400);
    });
  });
});
