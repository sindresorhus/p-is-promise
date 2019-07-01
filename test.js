import test from 'ava';
import Bluebird from 'bluebird';
import isPromise from '.';

test('main', t => {
	t.true(isPromise(Promise.resolve()));
	t.true(isPromise(global.Promise.resolve()));
	t.true(isPromise(Bluebird.resolve()));
	t.true(isPromise({
		then: () => {},
		catch: () => {}
	}));
	t.false(isPromise({
		then: () => {}
	}));
	t.false(isPromise({
		catch: () => {}
	}));
	t.false(isPromise({
		then: '🦄'
	}));
	t.false(isPromise({}));
	t.false(isPromise([]));
	t.false(isPromise(undefined));
	t.false(isPromise(null));
	t.false(isPromise('🦄'));
	t.false(isPromise(0));
	t.false(isPromise(true));
});

test('function', t => {
	const fixture = () => {};
	fixture.then = () => {};
	fixture.catch = () => {};
	t.true(isPromise(fixture));
});
