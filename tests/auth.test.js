import app from '../app';
import request from 'supertest';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { MongoMemoryServer } from 'mongodb-memory-server';
import User from '../models/User.model';
const req = request(app);

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

let mongoServer;
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, opts, err => {
    if (err) console.error(err);
  });
  await User.create({
    username: 'Danex2',
    password: 'somepassword',
    contactInfo: {
      phone: '647-123-7890',
      email: 'dane@gmail.com'
    }
  });
});

afterAll(async () => {
  await User.deleteMany({});
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Testing the authentication routes', () => {
  describe('Testing the login route', () => {
    test('LOGIN: if the username or password is missing then it should return a 400 status code', async done => {
      const res = await req.post('/login').send({ username: 'Danex2' });
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Missing username or password.');
      done();
    });
    test('LOGIN: if the user does not exist it should return a 400 status code', async done => {
      const res = await req
        .post('/login')
        .send({ username: 'Danex24', password: 'somepassword' });
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('No one with that username exists.');
      done();
    });
    test('LOGIN: if the password is invalid it should return a 400 status code', async done => {
      const res = await req
        .post('/login')
        .send({ username: 'Danex2', password: 'somepasswor' });
      expect(res.body.error).toBe('Invalid username or password.');
      done();
    });
    test('LOGIN: if all info is correct it should return a 200 status code and a token', async done => {
      const res = await req
        .post('/login')
        .send({ username: 'Danex2', password: 'somepassword' });
      expect(res.status).toBe(200);
      done();
    });
  });
  describe('testing the register route', () => {
    test('REGISTER: if any register information is missing then it should return a 400 status code', async done => {
      const res = await req.post('/register').send({ username: 'Danex2' });
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
