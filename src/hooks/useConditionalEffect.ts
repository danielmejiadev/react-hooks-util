// Dependencies
import React from 'react';

/**
 * An extension for use effect, just execute if the condition is true.
 * @param callback The callback to execute.
 * @param dependecies The dependencies to re rerun effect.
 * @param condition The condition to validate if the efect must be runned.
 */
export function useConditionalEffect(
  callback: React.EffectCallback,
  dependecies: unknown[],
  condition: boolean,
): void {
  const memoizeCallback = React.useCallback(callback, dependecies);
  React.useEffect(() => {
    if (condition) {
      memoizeCallback();
    }
  }, [memoizeCallback, condition]);
}

export default useConditionalEffect;
