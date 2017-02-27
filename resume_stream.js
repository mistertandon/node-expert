const FS = require('fs');

var rs;
rs = FS.createReadStream("./public/file_1.txt");

/**
 * Configure encoding i.e. `utf8` for readable stream.I
 */
rs.setEncoding('utf8');
rs.on("data", function (chunk) {

	console.log("chunk content : ");
	console.log(chunk);
	console.log("chunk size is : " + chunk.length);

	/**
	 * `Resuming` readable stream.
	 */
	rs.pause();

	/**
	 * After one second againg data will resume.
	 */
	setTimeout(function () {

		rs.resume();
	}, 1000);

});

/**
 * Data end handler.
 */
rs.on("end", function () {

	console.log("Reading operation has been end.I");
});
