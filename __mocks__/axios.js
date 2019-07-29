const axios = {
  get: jest.fn(() => Promise.resolve({ data: { name: 'John' } }))
};
module.exports = axios;
