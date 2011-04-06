(function () {
	"use strict";

	var functions = require('./libcanvas-functions');

	module.exports.ellipse = function (g, x, y, xDis, yDis) {
		return functions.ellipse.call(g, x, y, xDis, yDis);
	};

	provide('libcanvas-wrappers', module.exports);
}());
