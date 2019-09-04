describe('Validate template json file', () => {
  beforeEach(() => jest.resetModules());

  it('should return given text', async () => {
    jest.mock('../../__mocks__/axios');
    const { getTemplates } = require('./templateData');
    const data = await getTemplates();
    expect(data).toEqual({ name: 'John_1' });
    // expect(mockAxios.get).toHaveBeenCalled(
    //   'https://jsonplaceholder.typicode.com/photos'
    // );
  });

  it('should mock inside test', async () => {
    const axios = require('axios');
    jest.mock('axios');
    const resp = { name: 'John_2' };

    axios.get.mockResolvedValue(resp);
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    const { getTemplates } = require('./templateData');
    const data = await getTemplates();
    expect(data).toEqual({ name: 'John_2' });
  });

  it('mock version 3', async () => {
    jest.mock('axios', () => ({
      get: () => {
        return { name: 'John_3' };
      }
    }));
    const { getTemplates } = require('./templateData');
    const data = await getTemplates();
    expect(data).toEqual({ name: 'John_3' });
  });
});
