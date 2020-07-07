// Dependencies
import React, { SetStateAction, Dispatch } from 'react';

/**
 * Custom hook to manage a field form.
 * @param initial The field initial value.
 * @returns The set of operations for field.
 */
export function useField(
  initial?: string,
): [string, (event: unknown) => void, () => void, Dispatch<SetStateAction<string>>] {
  const [value, setValue] = React.useState<string>(initial as string);

  const onChange = React.useCallback((event) => {
    setValue(event?.target?.value || event);
  }, []);

  const reset = React.useCallback(() => setValue(initial as string), [initial]);

  return [value, onChange, reset, setValue];
}

export default useField;
