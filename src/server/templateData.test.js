import { getTemplates } from './templateData';
import axios from 'axios';

describe('Validate template json file', () => {

  it('should return given text', async () => {
    jest.mock('../../__mocks__/axios');
    const data = await getTemplates();
    expect(data).toEqual({ name: 'John' });
    // expect(mockAxios.get).toHaveBeenCalled(
    //   'https://jsonplaceholder.typicode.com/photos'
    // );
  });

  it('should mock inside test', async () => {
    jest.mock('axios');

    const resp = { name: 'John' };
    axios.get.mockResolvedValue(resp);

    const data = await getTemplates();
    expect(data).toEqual({ name: 'John' });
  });
});
