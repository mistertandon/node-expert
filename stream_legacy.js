const FS = require('fs');

var rs;
var totalChunks;

totalChunks = 0;

rs = FS.createReadStream("./public/file_1.txt");

/**
 * Configure encoding for readable stream.
 */
rs.setEncoding('utf8');

/**
 * Handler for `data` event from readable stream.
 */
rs.on("data", function (chunk) {

	console.log(chunk);
	++totalChunks;
});

rs.on("end", function () {

	console.log("Reading operation has been done.");
	console.log("Total chunks are : " + totalChunks);
});


