const FS = require('fs');

FS.readFile(
	"./socket_util.js",
	{ encoding: "utf8" },
	function (error, data) {

		console.log('File has been read and content is....');
		console.log(data);
	}
);

console.log('This message is intentional to demonstrate that file-reading process is asynchronously....');