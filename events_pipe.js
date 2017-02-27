const NET = require('net');

var netServer;

netServer = NET.createServer();


netServer.on('connection', function (socket) {

	/**
	 * Pipe event on Socket.
	 */
	socket.on('pipe', function () {

		console.log('pipe event has been fired');

	});

	/**
	 * Another Pipe event on Socket, store into event array.
	 */
	socket.on('pipe', function () {

		/**
		 * After 10 Seconds, pipe event will be unbounded associated with socket.
		 */
		setTimeout(function () {

			socket.unpipe(socket);
		}, 10000);
	});

	socket.pipe(socket);

});

/**
 * Serve listening configuration.
 */
netServer.listen(3091, '127.0.0.1');