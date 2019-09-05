describe('Validate template json file', () => {
  beforeEach(
    //Node.js and Jest will cache modules you require. To test modules with side effects you’ll need to reset the module registry between tests
    () => {
      jest.unmock('axios');
      jest.resetModules();
    }
  );

  it('Return TemplateData with mock separate file', async () => {
    var axios = require('axios');
    var MockAdapter = require('axios-mock-adapter');

    // This sets the mock adapter on the default instance
    var mock = new MockAdapter(axios);

    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    mock
      .onGet('https://jsonplaceholder.typicode.com/photos')
      .reply(200, { name: 'John_1' }, {});

    const { getTemplates } = require('./templateData');
    const response = await getTemplates();
    expect(response.status).toEqual(200);
    expect(response.data).toEqual({ name: 'John_1' });
  });
});
