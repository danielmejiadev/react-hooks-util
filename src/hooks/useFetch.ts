// Dependencies
import React from 'react';

// Types
import { PromiseCallback } from './types';

/**
 * A hook to fetch server data using a promise callback.
 * @param callback The promise callback.
 * @param dependencies The dependencies to update the effect.
 * @param initialValue The initial value.
 */
export function useFetch<T>(
  callback: PromiseCallback<T>,
  dependencies: unknown[],
  initialValue: T,
): [T, boolean, unknown, () => void] {
  const [data, setData] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const memoizeCallback = React.useCallback(callback, dependencies);
  const fetch = React.useCallback(() => {
    setLoading(true);
    memoizeCallback()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [memoizeCallback]);
  React.useEffect(fetch, [fetch]);

  return [data, loading, error, fetch];
}

export default useFetch;
