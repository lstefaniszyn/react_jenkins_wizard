describe('Validate template json file', () => {
  beforeEach(
    //Node.js and Jest will cache modules you require. To test modules with side effects you’ll need to reset the module registry between tests
    () => jest.resetModules()
  );

  it('Return TemplateData with mock separate file', async () => {
    jest.mock('../../__mocks__/axios');
    const { getTemplates } = require('./templateData');
    const data = await getTemplates();
    expect(data).toEqual({ name: 'John_1' });
    // expect(mockAxios.get).toHaveBeenCalled(
    //   'https://jsonplaceholder.typicode.com/photos'
    // );
  });

  it('Return TemplateData by mock method_1', async () => {
    const axios = require('axios');
    jest.mock('axios');
    const resp = { name: 'John_2' };

    axios.get.mockResolvedValue(resp);

    const { getTemplates } = require('./templateData');
    const data = await getTemplates();
    expect(data).toEqual({ name: 'John_2' });
  });

  it('Return TemplateData by mock method_2', async () => {
    const mockAxios = require('../../__mocks__/axios');
    const resp = { name: 'John_6' };

    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ status: 200, data: resp })
    );

    const { getTemplates } = require('./templateData');
    const response = await getTemplates();
    expect(response.data).toEqual({ name: 'John_6' });
  });

  it('Return TemplateData by mock axios get implementation', async () => {
    jest.mock('axios', () => ({
      get: () => {
        return { name: 'John_3' };
      }
    }));
    const { getTemplates } = require('./templateData');
    const data = await getTemplates();
    expect(data).toEqual({ name: 'John_3' });
  });

  it('Return TemplateData by mock axios get implementation and with separate test data', async () => {
    jest.mock('axios', () => ({
      get: () => {
        var testData_1 = require('../../__mock_data__/server/templateData_1.json');
        return testData_1;
      }
    }));

    const { getTemplates } = require('./templateData');
    const data = await getTemplates();
    expect(data).toEqual({ name: 'John_4' });
  });

  test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    '.add(%i, %i)',
    (a, b, expected) => {
      expect(a + b).toBe(expected);
    }
  );

  test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `('returns $expected when $a is added $b', ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
  });
});
