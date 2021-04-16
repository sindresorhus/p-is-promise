const isObject = value => value !== null &&
	(typeof value === 'object' || typeof value === 'function');

export default function isPromise(value) {
	return value instanceof Promise ||
		(
			isObject(value) &&
			typeof value.then === 'function' &&
			typeof value.catch === 'function'
		);
}
