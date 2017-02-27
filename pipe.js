const FS = require('fs');

var rs;
var ws;

/**
 * Creating `rs` Readable stream.
 */
rs = FS.createReadStream('./public/file_1.txt');

/**
 * Creating `ws` Writable stream.
 */
ws = FS.createWriteStream('./public/file_2.txt');

ws.on("pipe", function (rsData) {

	console.log('\n');
	console.log("Piped stream object");
	console.log(rsData);
	console.log("Readable stream object");
	console.log(rs);
	console.log('\n');

});

/**
 * Reading data from readableStream and writing it to
 * writable stream.
 */
rs.pipe(ws);