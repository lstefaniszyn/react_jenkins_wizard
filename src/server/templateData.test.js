describe('Validate template json file', () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  var mock = null;

  beforeEach(
    //Node.js and Jest will cache modules you require. To test modules with side effects you’ll need to reset the module registry between tests
    () => {
      jest.unmock('axios');
      jest.resetModules();

      var axios = require('axios');
      var MockAdapter = require('axios-mock-adapter');

      // This sets the mock adapter on the default instance
      mock = new MockAdapter(axios);
    }
  );

  it('Return TemplateData with mock separate file - small', async () => {
    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    var testData_1 = require('../../__mock_data__/server/templateData_1.json');
    mock.onGet(url).reply(200, testData_1, {});

    const { getTemplates } = require('./templateData');
    const response = await getTemplates();
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(testData_1);
  });


  it('Return TemplateData with mock separate file - full', async () => {
    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    var testData = require('../../__mock_data__/server/templateData_full.json');
    mock.onGet(url).reply(200, testData, {});

    const { getTemplates } = require('./templateData');
    const response = await getTemplates();
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(testData);
  });

  it('Set NetworkError as response', async () => {
    // Returns a failed promise with Error('Network Error');
    mock.onGet(url).networkError();

    const { getTemplates } = require('./templateData');
    try {
      await getTemplates();
    } catch (error) {
      expect(error.message).toEqual('Network Error');
    }
  });

  it('Validate negative response code 4xx', async () => {
    // Returns a failed promise with Error('Network Error');
    mock.onGet(url).reply(401, { name: 'John_1' }, {});

    const { getTemplates } = require('./templateData');

    try {
      await getTemplates();
    } catch (error) {
      expect(error.message).toEqual('Request failed with status code 401');
    }
  });

  it('Validate response with timeout', async () => {
    // Returns a failed promise with Error with code set to 'ECONNABORTED'
    mock.onGet(url).timeout();

    const { getTemplates } = require('./templateData');

    try {
      await getTemplates();
    } catch (error) {
      expect(error.message).toEqual('timeout of 0ms exceeded');
    }
  });

  it('Validate response with defined delay response time', async () => {
    var axios = require('axios');
    var MockAdapter = require('axios-mock-adapter');

    // All requests using this instance will have a 100ms delay:
    var mock = new MockAdapter(axios, { delayResponse: 100 });
    mock.onGet(url).reply(200, { name: 'John_1' }, {});

    const { getTemplates } = require('./templateData');

    try {
      await getTemplates();
    } catch (error) {
      expect(error.message).toEqual('Request failed with status code 404');
    }
  });
});
