import test from 'ava';
import Bluebird from 'bluebird';
import m from './';

test(t => {
	t.true(m(Promise.resolve()));
	t.true(m(global.Promise.resolve()));
	t.true(m(Bluebird.resolve()));
	t.true(m({
		then: () => {},
		catch: () => {}
	}));
	t.false(m({
		then: () => {}
	}));
	t.false(m({
		catch: () => {}
	}));
	t.false(m({
		then: '🦄'
	}));
	t.false(m({}));
	t.false(m([]));
	t.false(m(undefined));
	t.false(m(null));
	t.false(m('🦄'));
	t.false(m(0));
	t.false(m(true));
});
