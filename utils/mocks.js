const mockRequest = body => ({ body });
const mockResponse = () => {
  const res = {};
  res.json = () => res;
  res.status = () => res;
  return res;
};

export { mockRequest, mockResponse };
