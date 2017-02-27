'use strict';
const NET = require('net');

var netServer;
netServer = NET.createServer();

netServer.on('connection', function (socket) {

	/**
	 * `data` event will get triggered only once i.e for the very first time and last time.
	 */
	socket.on('data', function (data) {

		socket.write(data);

	});

	socket.on('data', function (data) {

		let dataEventListeners;
		dataEventListeners = socket.listeners('data');

		setTimeout(function () {

			socket.removeListener('data', dataEventListeners[0]);
		}, 4000);

	});
});

/**
 * `Listener` event.
 */
netServer.listen(3091, '127.0.0.1');