(function () {
	"use strict";

	require('require-kiss');

	module.exports = {
		functions: require('./lib/libcanvas-functions'),
		wrappers: require('./lib/libcanvas-wrappers')
	};

	provide('libcanvas', module.exports);
}());
