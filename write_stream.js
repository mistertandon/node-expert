'use strict';
const FS = require('fs');

var ws;

/**
 * Creating writable stream.
 */
ws = FS.createWriteStream('./public/write_stream.txt');

/**
 * Piping incoming data to writable stream.
 */
process.stdin.pipe(ws);
