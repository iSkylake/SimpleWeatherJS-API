var express = require('express'),
	fs = require('fs'),
	https = require('https'),
	app = express();

var options = {
	key : fs.readFileSync('./certificates/server.key'),
	cert : fs.readFileSync('./certificates/server.crt')
};

app.get('/', function (req, res) {
   res.send('Hello World!');
});

https.createServer(options, app).listen(3000, function(){
	console.log('Server Started');
});