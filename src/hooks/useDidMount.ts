// Hooks
import React from 'react';

/**
 * Hook to have the same behaviour as didMount-unmont cycle.
 * @param callback The callback to execute.
 */
export function useDidMount(callback: React.EffectCallback): void {
  React.useEffect(callback, []);
}

export default useDidMount;
