const NET = require('net');
const SOCKET_UTIL = require('./socket_util');
/**
 * `netServer` contain create server instance.
 */
var netServer = NET.createServer(function (socket) {

	/**
	 * Getting details about TCP-server and TCP-client.
	 */
	SOCKET_UTIL.socketAddress(socket);

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

	});

	/**
	 * When server connection closed by client, it emmits `end` event and executes
	 * provided callback.
	 */
	socket.on('end', function () {

		console.log('Connection get closed.');
	});

});

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