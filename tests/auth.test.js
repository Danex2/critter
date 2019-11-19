import app from '../app';
import request from 'supertest';

describe('Testing the authentication routes', () => {
  describe('Testing the login route', () => {
    test('LOGIN: if the username or password is missing then it should return a 400 status code', async done => {
      const res = await request(app)
        .post('/login')
        .send({ username: 'Danex2' });
      expect(res.status).toBe(400);
      done();
    });
  });
  describe('testing the register route', () => {});
});
