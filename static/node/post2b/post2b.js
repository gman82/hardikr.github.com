/*
* 2. File Server (with Static File Server Function)
* Performance may be really low, but it's simple enough to learn for a complete noob
* LICENSE: MIT LICENSE
*/

var http   = require('http');
var	url    = require('url');
var	fs	   = require('fs');
var file;
var	server = http.createServer(function (req,res) {
	var path = url.parse(req.url).pathname;
	switch(path) {
	// This is a trivial implementation of URL routing.		
		case '/' :	
			myStaticServer(res, '/index.html');
			break;

		case '/about' : 
			myStaticServer(res, '/about.html');
			break;

		case '/photo.jpg' : 
			myStaticServer(res, '/photo.jpg');
			break;

		case 'default': 	
			res.writeHead(404, {'Content-Type' : 'text/plain'});
			res.write('Page Not Found. 404');
			res.end();
	}

	function myStaticServer(res, file) {
		fs.readFile(__dirname + file, function(err, data) {
				res.writeHead(200, {'Content-Type' : file.split('.')[1] == 'html' ? 'text/html' : 'image/jpeg'});
				res.write(data,'utf8');
				res.end();
		});
	}

}).listen(8080);
console.log('Server started at http://localhost:8080');
