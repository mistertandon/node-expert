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

			console.log('Toal number of clients connected : ' + countConnection + " | #10001");
		})

		/**
		 * When `connect` event occur, execute following callback.
		 */
		socket.on("connect", function () {

			console.log('Connection has been made by server. | #10002');
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
			socket.write('Reply from TCP server : ' + data + '| #10003\n');

			/**
			 * `SOCKET_UTIL.socketStates` is a local module used to retrieve `bytesRead` and
			 * `bytesWritten` information as any `data` event emitted..
			 * 
			 * 	SOCKET_UTIL.socketStates(socket);
			 */
			/**
			 * How we can emmit event, here we are emitting error event.
			 * 
			 * socket.emit("error", new Error("Manually emitting error."));
			 */

		});

		/**
		 * `close` event handler.
		 */
		socket.on('close', function () {

			console.log('Connection get closed.| #10004\n');
		});

		/**
		 * When server connection closed by client, it emmits `end` event and executes
		 * provided callback.
		 */
		socket.on('end', function () {

			/**
			 * `SOCKET_UTIL.socketStates` module retrieve all the 'Read & Write' bytes
			 * when server `end` event emitted.
			 */
			SOCKET_UTIL.socketStates(socket);
			console.log('Connection get ended.| #10005\n');
		});

		/**
		 * Error handler
		 */
		socket.on('error', function (error) {

			console.log('something went wrong, please try after some time. | #10006\n');

			/**
			 * socket.destroy("Connection end event has been emitted.\n"); // triggers only close event.
			 * `socket.end()` triggers `end` and `close` event.
			 * 
			 * socket.end("Connection end event has been emitted.\n");
			 */
		});

		/**
		 * How we can set idle time period for a user.
		 * 
			socket.setTimeout(3000);
			socket.on("timeout", function () {

				socket.end('`socket.end` event emitted as a result of `socket-timeout` event.');
			});
		 *
		 */

		/**
		 * `socket.end` method will triggered after 20 seconds idle time with any
		 *	connected TCP client.

		setTimeout(function () {

			socket.end("\n triggers server end event as idle timeout has been completed | #10000");
		}, 20000);
		 *
		 */
	});

/**
 * `netServer.maxConnections` configure `max connection` server can have.
 */
netServer.maxConnections = 2;

/**
 * Alternative way to handle server `close` event.
 */
netServer.on("close", function () {

	console.log("\nThis message got printed from server `close` event handler.| #10007");
});

/**
 * How we can execute server.close method automatically afte a set time interval.
 * 
setTimeout(
	function () {

		netServer.close(function () {

			console.log('\nMessage got printed using `setTimeout` function.| #10008');
		});
	},
	10000);
*
*/

/**
 * Server listening event definition with call-back.
 */
netServer.listen(3091, function () {

	/**
	 * Accessing bound address, family and port reported by operating sysytem.
	 */
	console.log(JSON.stringify(netServer.address()));
	console.log('server is listening at port 3091. | #10009');
});