// Dependencies
import React from 'react';

// Hooks under testing
import useFetch from '../useFetch';

/**
 * @file useFetch.spec.js
 * @author Daniel Mejia
 */
describe('UseFetch Hook', () => {
  beforeEach(() => jest.resetAllMocks());

  it('should use fetch', async () => {
    const initialValue: unknown[] = [];
    const callback = jest.fn().mockResolvedValue(true);
    const setLoading = jest.fn();
    const setData = jest.fn();
    const setError = jest.fn();

    jest.spyOn(React, 'useState')
      .mockReturnValueOnce([initialValue, setData])
      .mockReturnValueOnce([false, setLoading])
      .mockReturnValueOnce([undefined, setError]);
    jest.spyOn(React, 'useCallback').mockImplementation((param) => param);
    jest.spyOn(React, 'useEffect').mockImplementation((param) => param());

    const [data, loading, error, fetch] = useFetch<unknown[]>(callback, [], initialValue);
    await fetch();
    expect(data).toEqual(initialValue);
    expect(loading).toBeFalsy();
    expect(error).toBeUndefined();
    expect(setLoading).toHaveBeenCalledWith(true);
    expect(setData).toHaveBeenCalledWith(true);
  });
});
