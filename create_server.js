const HTTP = require('http');

/**
 * `httpFn_CB` is a callback function, get execute after server creation.
 */
function httpFn_CB(request, response) {

	response.writeHead(200, {
		"Content-Type": "text/plain"
	});

	console.log('Server has been created');
	response.end('Server has been created');

}
var proxy = HTTP.createServer(httpFn_CB);

proxy.listen(3090, '127.0.0.1', () => {

	console.log('Server is listening on port 3090');
});