Intro
=====

HTML5 has all of the functions necessary to draw whatever you want, but sometimes the API leaves a little to be desired.  This module attempts to add convenience methods to the HTML5 API.

To install this module:

`npm install libcanvas`

Note: You will still need to copy the source files if you plan to use this in the browser.

Functions
---------

These functions are added in supplement to the default methods in the HTML5 canvas drawing specification.  These are only convenience methods to simplify common tasks.

**ellipse(x, y, xDis, yDis)**

Draw an ellipse (uses bézier curves)

* parameters
  * `x`- center of ellipse with respect to the x-axis
  * `y`- center of ellipse with respect to the y-axis
  * `xDis`- distance to outside of ellipse from center on the x-axis
  * `yDis`- distance to outside of ellipse from center on the y-axis
* notes
  * does not call `beginPath`, `closePath`, `stroke` or `fill`
  * ellipses will not be perfect because we use an estimate *kappa*
  * *kappa* = `4 * ((sqrt(2) - 1) / 3)`

Dependencies
------------

In order to make your life easier, this library depends on `require-kiss`:

`npm install require-kiss`

You will need to put the `require-kiss.js` file somewhere where your webpage can access it, and you will need to import it before the libcanvas js files.

See the [project page](https://github.com/coolaj86/require-kiss-js) for more details.

Examples
--------

There are four examples provided, with a simple node.js webserver.

* all.html- All three ways to use the library in one file
* low-level.html- Use of the low-level functions
* protoOverride.html- Overrides the drawing object prototype (**preferred**)
* wrappers.html- Using the wrapped functions

Usage Guide
===========

There are three different ways to use this library (depending on your personality): add to the drawing API prototype, access wrapper functions, or access the low-level functions.

Add to Drawing API Prototype
----------------------------

You will need both `libcanvas-functions.js` and `libcanvas.js` because the low-level functions are stored in the functions submodule.  A full example is in `protoOverride.html`, but here are the basics:

Require the necessary modules in the head section:

	<script src="./require-kiss.js"></script>
	<script src="js/libcanvas-functions.js"></script>
	<script src="js/libcanvas.js"></script>

Draw something:

	context.beginPath();
	context.ellipse(250, 250, 250, 250);
	context.closePath();
	context.stroke();

Use Wrapper Functions
---------------------

You will need both `libcanvas-functions.js` and `libcanvas-wrappers.js` because the low-level functions are stored in the functions submodule.  A full example is in `wrappers.html`, but here are the basics:

Require the necessary modules in the head section:

	<script src="./require-kiss.js"></script>
	<script src="js/libcanvas-functions.js"></script>
	<script src="js/libcanvas-wrappers.js"></script>

Require the wrappers module:

	`var wrappers = require('./libcanvas-wrappers');`

Draw something:

	context.beginPath();
	wrappers.ellipse(context, 250, 250, 250, 250);
	context.closePath();
	context.stroke();

Access Low-Level Functions
--------------------------

These low-level functions need to be called with call() because they act internally as if they are a member of a drawing object. In this instance, the functionality provided by `require-kiss` is not necessary, but it uses the `provide` method in order to work with the other modules. If you really want to avoid this dependency, remove the line with `provide` from the source.

You will only need `libcanvas-functions.js`.  A full example is in `low-level.html`, but here are the basics:

Require the necessary modules in the head section (require-kiss is only needed to avoid errors with `provide` not being defined):

	<script src="./require-kiss.js"></script>
	<script src="js/libcanvas-functions.js"></script>

Require the functions module:

	`var functions = require('./libcanvas-functions');`

Draw something:

	context.beginPath();
	functions.ellipse.call(context, 250, 250, 250, 250);
	context.closePath();
	context.stroke();
