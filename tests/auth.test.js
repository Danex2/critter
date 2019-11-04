import { mockResponse, mockRequest } from '../utils/mocks';

describe('Testing the authentication routes', async () => {
  test('Login should return a 400 status code if the username or password is missing', async () => {
    const req = mockRequest({ username: 'danex2' });
    const res = mockResponse();
  });
});
