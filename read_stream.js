'use strict';

const NET = require('net');
const FS = require('fs');

var netServer;
netServer = NET.createServer();

/**
 * Connection event handler.
 */
netServer.on('connection', function (socket) {

	var rs;
	rs = FS.createReadStream('./public/data.txt');

	rs.pipe(socket);
});

/**
 * Configure maximum connection, server can have.
 */
netServer.maxConnections = 10;

/**
 * Server `listening` port and host.
 */
netServer.listen(3091, '127.0.0.1');