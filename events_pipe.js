const NET = require('net');

var netServer;

netServer = NET.createServer();


netServer.on('connection', function (socket) {

	/**
	 * Configure number of listeners we can attached with event.
	 */
	socket.setMaxListeners(2);
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

	/**
	 * Getting all listeners associated with pipe event.
	 */
	var pipeEventListeners;

	pipeEventListeners = socket.listeners('pipe');
	console.log('=========== First listener associated with `pipe` event ===========\n\n');
	console.log(pipeEventListeners[0].toString());

	console.log('=========== Second listener associated with `pipe` event ===========\n\n');
	console.log(pipeEventListeners[1].toString());

	console.log('============================================\n\n');
	console.log('Listeners length associated with pipe event : ' + socket.listeners('pipe').length);
	console.log('\n\n============================================');

	socket.pipe(socket);

});

/**
 * Serve listening configuration.
 */
netServer.listen(3091, '127.0.0.1');