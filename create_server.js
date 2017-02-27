'use strict';

const HTTP = require('http');
const URL = require("url");

/**
 * `httpFn_CB` is a callback function, get execute after server creation.
 */
function httpFn_CB(request, response) {

	var body;
	var urlObj;

	body = "Server has been created | #10003";

	urlObj = URL.parse(request.url);
	console.log(JSON.stringify(urlObj));

	/**
	 *	we may redirect user to another site using status code 302
	 * "Location": "https://www.google.co.in", with status code 302
	 */
	response.writeHead(200, {
		"Content-Type": "text/plain",

		"Content-Length": body.length
	});

	response.write(body);
	response.end();
}

/**
 * Creating server instance.
 */
var proxy = HTTP.createServer(httpFn_CB);

proxy.listen(3091, '127.0.0.1', () => {

	console.log('Server is listening on port 3091 | #10001');
});