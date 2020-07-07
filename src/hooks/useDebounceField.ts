// Dependencies
import React, { Dispatch, SetStateAction } from 'react';

// Hooks
import { useDebounceCallback } from './useDebounceCallback';
import { useField } from './useField';

// Types
import { CallbackParams } from './types';

/**
 * A custom hook to use a field debounced.
 * @param callback The callback to execute.
 * @param dependecies The dependencies to re rerun effect.
 * @param delay The debounce delay.
 * @param initial The field initial value.
 * @returns The set of operations for field.
 */
export function useDebounceField(
  callback: CallbackParams,
  dependecies: unknown[],
  delay?: number,
  initialValue?: string,
): [string, (event: unknown) => void, () => void, Dispatch<SetStateAction<string>>] {
  const [value, onChange, reset, setValue] = useField(initialValue);
  const debounceSearch = useDebounceCallback(callback, dependecies, delay);
  const handleChange = React.useCallback((event) => {
    const newValue = event?.target?.value || event;
    onChange(newValue);
    debounceSearch(newValue);
  }, [debounceSearch, onChange]);

  return [value, handleChange, reset, setValue];
}

export default useDebounceField;
