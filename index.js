'use strict';

const isObject = value => value !== null &&
	(typeof value === 'object' || typeof value === 'function');

const isPromise = value => (
	value instanceof Promise ||
	(
		isObject(value) &&
		typeof value.then === 'function' &&
		typeof value.catch === 'function'
	)
);

module.exports = isPromise;
// TODO: Remove this for the next major release
module.exports.default = isPromise;
