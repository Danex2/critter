"use strict";

var _app = _interopRequireDefault(require("../app"));

var _supertest = _interopRequireDefault(require("supertest"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongodbMemoryServer = require("mongodb-memory-server");

var _User = _interopRequireDefault(require("../models/User.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const req = (0, _supertest.default)(_app.default);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
let mongoServer;
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};
beforeAll(async () => {
  mongoServer = new _mongodbMemoryServer.MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await _mongoose.default.connect(mongoUri, opts, err => {
    if (err) console.error(err);
  });
  await _User.default.create({
    username: 'Danex2',
    password: 'somepassword',
    contactInfo: {
      phone: '647-123-7890',
      email: 'dane@gmail.com'
    }
  });
});
afterAll(async () => {
  await _User.default.deleteMany({});
  await _mongoose.default.disconnect();
  await mongoServer.stop();
});
describe('Testing the authentication routes', () => {
  describe('Testing the login route', () => {
    test('LOGIN: if the username or password is missing then it should return a 400 status code', async done => {
      const res = await req.post('/login').send({
        username: 'Danex2'
      });
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Missing username or password.');
      done();
    });
    test('LOGIN: if the user does not exist it should return a 400 status code', async done => {
      const res = await req.post('/login').send({
        username: 'Danex24',
        password: 'somepassword'
      });
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('No one with that username exists.');
      done();
    });
    test('LOGIN: if the password is invalid it should return a 400 status code', async done => {
      const res = await req.post('/login').send({
        username: 'Danex2',
        password: 'somepasswor'
      });
      expect(res.body.error).toBe('Invalid username or password.');
      done();
    });
    test('LOGIN: if all info is correct it should return a 200 status code and a token', async done => {
      const res = await req.post('/login').send({
        username: 'Danex2',
        password: 'somepassword'
      });
      expect(res.status).toBe(200);
      done();
    });
  });
  describe('testing the register route', () => {
    test('REGISTER: if any register information is missing then it should return a 400 status code', async done => {
      const res = await req.post('/register').send({
        username: 'Danex2'
      });
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Missing some registration info.');
      done();
    });
    test('REGISTER: if the user already exists then it should return a 400 status code', async done => {
      const res = await req.post('/register').send({
        username: 'Danex2',
        password: 'somepassword',
        email: 'dane@gmail.com',
        phone: '647-123-7890'
      });
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Someone with that username already exists.');
      done();
    });
    test('REGISTER: if any of the fields are invalid it should return a 400 status code', async done => {
      const res = await req.post('/register').send({
        username: 'Danex2',
        password: 'somepassword',
        email: 'dane@@@@gmail.com',
        phone: '647-123-7890'
      });
      expect(res.status).toBe(400);
      done();
    });
    test('REGISTER: if all fields are valid it should return a 201 status code', async done => {
      const res = await req.post('/register').send({
        username: 'Danex4',
        password: 'somepassword',
        email: 'dane@gmail.com',
        phone: '613-555-0134'
      });
      expect(res.status).toBe(201);
      done();
    });
  });
});