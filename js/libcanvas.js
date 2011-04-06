(function () {
	"use strict";

	var functions = require('./libcanvas-functions');

	if (CanvasRenderingContext2D) {
		CanvasRenderingContext2D.prototype.ellipse = functions.ellipse;
	}
}());
