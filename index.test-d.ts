import {expectType} from 'tsd-check';
import isPromise from '.';

expectType<boolean>(isPromise('🦄'));

const unicorn: unknown = Promise.resolve('🦄');

if (isPromise(unicorn)) {
	expectType<Promise<unknown>>(unicorn);
	expectType<unknown>(await unicorn);
}
