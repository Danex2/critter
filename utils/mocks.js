const mockRequest = body => ({ body });
const mockResponse = () => {
  const res = {};
  res.json = jest.fn(() => res);
  res.status = jest.fn(() => res);
  res.send = jest.fn(() => res);
  return res;
};

export { mockRequest, mockResponse };
