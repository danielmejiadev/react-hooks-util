// Dependencies
import React from 'react';

/**
 * A hook to generate basic logic to manage a state with actions.
 * @param initalValue The initial state value for state.
 * @returns The state of modal and the memoize actions to manage it.
 */
export function useStateActions(initalValue?: boolean): [boolean, () => void, () => void] {
  const [state, setState] = React.useState(!!initalValue);
  const setTruthy = React.useCallback(() => setState(true), []);
  const setFalsy = React.useCallback(() => void setState(false), []);

  return [state, setFalsy, setTruthy];
}

export default useStateActions;
