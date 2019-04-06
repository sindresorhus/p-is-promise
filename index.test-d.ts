import {expectType} from 'tsd';
import isPromise = require('.');

expectType<boolean>(isPromise('🦄'));

const unicorn: unknown = Promise.resolve('🦄');

if (isPromise(unicorn)) {
	expectType<Promise<unknown>>(unicorn);
	expectType<unknown>(await unicorn);
}
