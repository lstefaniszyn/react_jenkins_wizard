const axios = {
  get: jest.fn(() => Promise.resolve({ name: 'John_1' }))
};
module.exports = axios;
