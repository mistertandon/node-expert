const NET = require('net');
const FS = require('fs');

var netServer = NET.createServer();

netServer.on('connection', function (socket) {

	/**
	 * `data` event associated with socket.
	 */
	socket.on('data', function (data) {

		/**
		 * Will append incoming data to target file.
		 */
		FS.appendFile("./public/data.txt", data, "utf8", function (error) {

			console.log('data has been written');
		});

	});
});

/**
 * `netServer` is listening at 3091 port.
 */
netServer.listen(3091, 'localhost', function (error, data) {

	console.log('Server is listening at port number 3091 | #10001');
});