import { renderHook } from '@testing-library/react-hooks';
import { useGetTemplates } from './useGetTemplates';
import { getTemplates } from '../../server/templateData';
import { nextButton } from '../commonActions';

jest.mock('../../server/templateData'); // this happens automatically with automocking
jest.mock('../commonActions');
jest.unmock('axios');

/* How to test Hooks - https://react-hooks-testing-library.com/usage/basic-hooks  */
describe('Test custom hook - useGetTemplates', () => {
  beforeEach(
    //Node.js and Jest will cache modules you require. To test modules with side effects you’ll need to reset the module registry between tests
    () => {
      jest.resetModules();
      //set mock for nextButton
      nextButton.setDisable.mockImplementation(state => {
        console.log(`Set nextButton setDisable: ${state}`);
      });
      nextButton.attachListener.mockImplementation(handler => {
        console.log(`Set nextButton attachListener: ${handler}`);
      });
      nextButton.detachListener.mockImplementation(handler => {
        console.log(`Set nextButton detachListener ${handler}`);
      });
    }
  );

  afterEach(() => {
    getTemplates.mockClear();
    nextButton.setDisable.mockClear();
    nextButton.attachListener.mockClear();
    nextButton.detachListener.mockClear();
  });

  afterAll(() => {
    jest.unmock('../../server/templateData'); // this happens automatically with automocking
    jest.unmock('../commonActions');
  });

  it('Run once getTemplates', () => {
    const { result } = renderHook(() => useGetTemplates());
    expect(getTemplates).toHaveBeenCalledTimes(1);
  });

  it("validate customHook 'useGetTemplates' with mock API call request", async () => {
    getTemplates.mockReturnValue({ data: { name: 'Hello' } });
    const { result, waitForNextUpdate } = renderHook(() => useGetTemplates());
    var [templateNames, isError, isLoading] = result.current;

    await waitForNextUpdate();

    [templateNames, isError, isLoading] = result.current;

    expect(isLoading).toBe(false);
    expect(isError).toBe(false);
    expect(templateNames).toStrictEqual({ name: 'Hello' });
  });

  it('when waiting for response from getTemplates. Check isLoading status ', async () => {
    getTemplates.mockImplementation(() => {
      setTimeout(() => {}, 10000);
      return { data: { name: 'Hello' } };
    });

    const { result, waitForNextUpdate } = renderHook(() => useGetTemplates());
    var [templateNames, isError, isLoading] = result.current;
    expect(isLoading).toBe(true);
    await waitForNextUpdate();

    [templateNames, isError, isLoading] = result.current;

    expect(isLoading).toBe(false);
    expect(isError).toBe(false);
  });

  it('when received positive response from getTemplates and no error for nextButton', async () => {
    //set mock with positive response from getTemplates
    var testData = require('../../../__mock_data__/server/templateData_full.json');
    getTemplates.mockReturnValue({ data: testData });

    const { result, waitForNextUpdate } = renderHook(() => useGetTemplates());
    var [templateNames, isError, isLoading] = result.current;
    await waitForNextUpdate();

    [templateNames, isError, isLoading] = result.current;

    expect(isLoading).toBe(false);
    expect(isError).toBe(false);
    expect(templateNames).toStrictEqual(testData);
  });

  it('when received error response from getTemplates', () => {
    //set mock with Error response from getTemplates
    getTemplates.mockImplementation(() => {
      throw new Error();
    });

    const { result } = renderHook(() => useGetTemplates());
    var [templateNames, isError, isLoading] = result.current;

    expect(isLoading).toBe(false);
    expect(isError).toBe(true);
    expect(templateNames).toStrictEqual([]);
  });
});
