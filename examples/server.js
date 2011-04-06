var connect = require('connect'),
	port = 5454;

connect(
	connect.static("./")
).listen(port, function () {
	console.log("Server running on port " + port);
});
