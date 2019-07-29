import { getTemplates } from './templateData';
const mockAxios = require('axios');
jest.mock('../../__mocks__/axios');

describe('Validate template json file', () => {
  //   beforeAll(() => {
  //     get.__setValue({ name: 'Smith' });
  //   });

  it('should return given text', async () => {
    const data = await getTemplates();
    expect(data.data).toEqual({ name: 'John' });
    // expect(mockAxios.get).toHaveBeenCalled(
    //   'https://jsonplaceholder.typicode.com/photos'
    // );
  });
});
