'use strict';
module.exports = x => (
	x !== null &&
	typeof x === 'object' &&
	typeof x.then === 'function' &&
	typeof x.catch === 'function'
);
