const NET = require('net');

var netServer;
netServer = NET.createServer();

netServer.on('connection', function (socket) {

	/**
	 * `data` event will get triggered only once i.e for the very first time and last time.
	 */
	socket.once('data', function (data) {

		socket.write(data);

	});
});

/**
 * `Listener` event.
 */
netServer.listen(3091, '127.0.0.1');