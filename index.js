'use strict';
const isPromise = x => (
	x instanceof Promise ||
	(
		x !== null &&
		typeof x === 'object' &&
		typeof x.then === 'function' &&
		typeof x.catch === 'function'
	)
);

module.exports = isPromise;
module.exports.default = isPromise;
