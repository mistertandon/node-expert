const FS = require('fs');

var rs;

/**
 * Creating readable stream.
 */
rs = FS.createReadStream('./public/data.txt');

/**
 * Reading readable stream and piping it to process.stdout i.e. writable stream.
 */
rs.pipe(process.stdout);
