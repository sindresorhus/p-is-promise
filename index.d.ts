/**
Check if a value is a promise.

@param value - Value to be checked.

@example
```
import isPromise from 'p-is-promise';

isPromise(Promise.resolve('🦄'));
//=> true
```
*/
export default function isPromise<T>(value: unknown): value is Promise<T>;
