const NET = require('net');
const SOCKET_UTIL = require('./socket_util');
var countWriteOperation = 0;

var clientSocket = NET.connect({
	port: 3091, host: '127.0.0.1', allowHalfOpen: true
}, function () {

	/**
	 * writing on socket to trigger `data` event.
	 */
	clientSocket.write('Hello from tcp_client. | #20002');

});

clientSocket.setEncoding('utf8');

/**
 * Socket `data` event handler.
 */
clientSocket.on("data", function (data) {

	SOCKET_UTIL.socketAddress(clientSocket);

	console.log('Data from server : ' + data + ' | #20000');
	/**
	 * How we can destroy connected socket.
	 * clientSocket.destroy();
	 */
});

/**
 * Here we'll write using socket 3 times, with time interval 2 seconds and later
 * will destroy socket.
 */
setInterval(function () {

	if (countWriteOperation == 3) {

		clientSocket.destroy();
	}

	++countWriteOperation;
	clientSocket.write('Writing data to server....');

}, 2000);

/**
 * Socket `close` event handler.
 */
clientSocket.on("close", function (data) {

	console.log('Client socket close event occured | #20001');
});

