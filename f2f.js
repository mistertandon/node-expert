const FS = require('fs');

var rs;
var ws;
/**
 * Creating readable stream.
 */
rs = FS.createReadStream("./public/file_1.txt");

/**
 * Creating wirtable stream.
 */
ws = FS.createWriteStream("./public/file_2.txt");

/**
 * Piping data from readable stream to writable stream i.e. file_2.txt
 */
rs.pipe(ws);

/**
 * Piping data from readable stream to writable stream i.e. process.stdout
 */
rs.pipe(process.stdout);

