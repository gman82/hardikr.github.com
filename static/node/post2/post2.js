/*
* 2. File Server
* Performance may be really low, but it's simple enough to learn for a complete noob
* LICENSE: MIT LICENSE
*/

var http   = require('http');
var	url    = require('url');
var	fs	   = require('fs');
var	server = http.createServer(function (req,res) {
	var path = url.parse(req.url).pathname;
	switch(path) {
	// This is a trivial implementation of URL routing.		
		case '/' :	
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.write('Welcome, you have reached my homepage. You can check out my twitter profile <a href="https://twitter.com/hardikr">here</a>' + 
			'<p>Sitemap</p>' + 
			'<li><a href="about">About</a>' + 
			'<li><a href="image.png">My Favorite XKCD comic</a>'
			);
			res.end();
			break;

		case '/about' : 
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.write('My name is Hardik and that\'s all I know right now :| <br/> <a href="/">Go Back</a> ');
			res.end();
			break;

		case '/image.png' : 
			fs.readFile(__dirname + path, function(err, data) {
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'image/png'});
				res.write(data,'utf8');
				res.end();
			});
			break;

		case 'default': 	
			res.writeHead(404, {'Content-Type' : 'text/plain'});
			res.write('Page Not Found. 404');
			res.end();
	}

}).listen(8080);
console.log('Server started at http://localhost:8080');
