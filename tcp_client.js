const NET = require('net');

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

	console.log('Data from server : ' + data + ' | #20000');
	clientSocket.destroy();
});

/**
 * Socket `close` event handler.
 */
clientSocket.on("close", function (data) {

	console.log('Client socket close event occured | #20001');
});