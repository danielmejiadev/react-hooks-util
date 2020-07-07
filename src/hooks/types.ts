// Custom type definitions
export type PromiseCallback<T> = (...args: unknown[]) => Promise<T>;
export type CallbackParams = (...args: unknown[]) => void;
