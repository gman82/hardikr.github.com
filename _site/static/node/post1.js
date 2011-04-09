/*
* 1. Basic http and hello world
*/
var http = require('http'),
	server;
server = http.createServer(function (req,res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write('<b>Hello World</b>');
	res.end();
}).listen(8080); // Defaults to localhost (127.0.0.1)
console.log('Server started on http://localhost:8080');
