module.exports.socketAddress = function (socket) {

	console.log('Remote Port : ' + socket.remotePort);
	console.log('Remote Address : ' + socket.remoteAddress);
	console.log('Local Port : ' + socket.localPort);
	console.log('Local Address : ' + socket.localAddress);
}