/**
 * Here we wil access process.stdin readable stream and write it to
 * process.stdout writable stream.
 */
process.stdin.pipe(process.stdout);