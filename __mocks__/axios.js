const axios = {
  get: jest.fn(() => Promise.resolve({ name: 'John' }))
};
module.exports = axios;
