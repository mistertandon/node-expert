/**
 * `socketAddress` function is used to get `bounded client` address and ip along with
 * `serevr`
 */
function socketAddress(socket) {

	console.log('\n\nRemote Port : ' + socket.remotePort);
	console.log('Remote Address : ' + socket.remoteAddress);
	console.log('Local Port : ' + socket.localPort);
	console.log('Local Address : ' + socket.localAddress);
}

/**
 * `socketStates` function is used to get states for data.
 */
function socketStates(socket) {

	console.log('\n\nBytes Read : ' + socket.bytesRead);
	console.log('Bytes Written : ' + socket.bytesWritten);
}

module.exports.socketAddress = socketAddress;
module.exports.socketStates = socketStates;

