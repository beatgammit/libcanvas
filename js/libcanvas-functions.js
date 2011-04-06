(function () {
	require('require-kiss');

	function ellipse(x, y, xDis, yDis) {
		var kappa = .5522848;
			ox = xDis * kappa,  // control point offset horizontal
			oy = yDis * kappa,  // control point offset vertical
			xe = x + xDis,      // x-end
			ye = y + yDis;      // y-end

		this.moveTo(x - xDis, y);
		this.bezierCurveTo(x - xDis, y - oy, x - ox, y - yDis, x, y - yDis);
		this.bezierCurveTo(x + ox, y - yDis, xe, y - oy, xe, y);
		this.bezierCurveTo(xe, y + oy, x + ox, ye, x, ye);
		this.bezierCurveTo(x - ox, ye, x - xDis, y + oy, x - xDis, y);
	}

	module.exports.ellipse = ellipse;
	provide('libcanvas-functions', module.exports);
}());
