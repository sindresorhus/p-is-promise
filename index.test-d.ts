import {expectType} from 'tsd';
import isPromise from './index.js';

expectType<boolean>(isPromise('🦄'));

const unicorn: unknown = Promise.resolve('🦄');

if (isPromise(unicorn)) {
	expectType<Promise<unknown>>(unicorn);
	expectType<unknown>(await unicorn);
}
