const NET = require('net');
const SOCKET_UTIL = require('./socket_util');

/**
 * `netServer` contain create server instance.
 */
var netServer = NET
	.createServer(function (socket) {

		/**
		 * Getting details about TCP-server and TCP-client.
		 */
		SOCKET_UTIL.socketAddress(socket);

		/**
		 * `netServer.getConnections` function used to retrieve connected
		 *	clients with server.
		 */
		netServer.getConnections(function (err, countConnection) {

			console.log('Toal number of clients connected : ' + countConnection);
		})

		/**
		 * When `connect` event occur, execute following callback.
		 */
		socket.on("connect", function () {

			console.log('Connection has been made by server');
		});

		/**
		 * When `data` event occur, execute following callback and respond with
		 * same data.
		 */
		socket.on("data", function (data) {

			/**
			 * Alternative way
			 * 
			 * socket.write('Reply from TCP server : ' + JSON.stringify(data) + '\n');
			 */
			socket.write('Reply from TCP server : ' + data + '\n');

			/**
			 * How we can emmit event, here we are emitting error event.
			 */
			socket.emit("error", new Error("Manually emitting error."));

		});

		/**
		 * `close` event handler.
		 */
		socket.on('close', function () {

			console.log('Connection get closed.\n');
		});

		/**
		 * When server connection closed by client, it emmits `end` event and executes
		 * provided callback.
		 */
		socket.on('end', function () {

			console.log('Connection get ended.\n');
		});

		/**
		 * Error handler
		 */
		socket.on('error', function (error) {

			console.log('something went wrong, please try after some time.\n');

			/**
			 * socket.destroy("Connection end event has been emitted.\n"); // triggers only close event.
			 * `socket.end()` triggers `end` and `close` event.
			 */
			socket.end("Connection end event has been emitted.\n");

		});

	});

/**
 * `netServer.maxConnections` configure `max connection` server can have.
 */
netServer.maxConnections = 2;
/**
 * Server listening event definition with call-back.
 */
netServer.listen(3091, function () {

	/**
	 * Accessing bound address, family and port reported by operating sysytem.
	 */
	console.log(JSON.stringify(netServer.address()));
	console.log('server is listening at port 3091');
});