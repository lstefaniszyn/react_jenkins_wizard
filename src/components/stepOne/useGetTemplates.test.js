import { renderHook } from '@testing-library/react-hooks';
// const { act } = require('react-dom/test-utils');
import { act } from 'react-test-renderer';
import { useGetTemplates } from './useGetTemplates';
import { getTemplates } from '../../server/templateData';
import { nextButton } from '../commonActions';
jest.unmock('axios');
jest.mock('../../server/templateData'); // this happens automatically with automocking
jest.mock('../commonActions');

/* How to test Hooks - https://react-hooks-testing-library.com/usage/basic-hooks  */
describe('Test custom hook - useGetTemplates', () => {
  beforeEach(
    //Node.js and Jest will cache modules you require. To test modules with side effects you’ll need to reset the module registry between tests
    () => {
      jest.resetModules();
      getTemplates.mockClear();
      nextButton.setDisable.mockClear();
      nextButton.attachListener.mockClear();
      nextButton.detachListener.mockClear();
    }
  );

  // it('when waiting for response from getTemplates ', async () => {
  //   const { useGetTemplates } = require('./useGetTemplates');
  //   act(() => {
  //     const { result } = renderHook(() => useGetTemplates());
  //     console.log('result.current: ' + result.current);
  //     const [templateNames, isError, isLoading] = result.current;
  //     expect(isLoading).toBe(true);
  //     expect(isError).toBe(false);
  //     expect(templateNames).toStrictEqual([]);
  //   });
  // });

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

  it('when received positive response from getTemplates', async () => {
    var testData = require('../../../__mock_data__/server/templateData_full.json');
    getTemplates.mockReturnValue({ data: testData });

    nextButton.setDisable.mockImplementation(state => {
      console.log(`Set nextButton setDisable: ${state}`);
    });

    // attachListener: jest.fn(handler => {
    //   console.log(`Set nextButton attachListener: ${handler}`);
    // }),
    // detachListener: jest.fn(handler => {
    //   console.log(`Set nextButton detachListener ${handler}`);
    // })
    // };

    const { result, waitForNextUpdate } = renderHook(() => useGetTemplates());
    var [templateNames, isError, isLoading] = result.current;
    await waitForNextUpdate();

    [templateNames, isError, isLoading] = result.current;

    expect(isLoading).toBe(false);
    expect(isError).toBe(false);
    expect(templateNames).toStrictEqual(testData);
  });

  // it('when received error response from getTemplates', async () => {
  //   // const { useGetTemplates } = require('./useGetTemplates');

  //   const { result } = renderHook(() => useGetTemplates());

  //   const [templateNames, isError, isLoading] = result.current;
  //   expect(isLoading).toBe(false);
  //   expect(isError).toBe(true);
  //   expect(templateNames).toStrictEqual([]);
  // });
});
