var express = require('express'),
	fs = require('fs'),
	https = require('https'),
	app = express();

var options = {
	key : fs.readFileSync('./certificates/server.key'),
	cert : fs.readFileSync('./certificates/server.crt')
};

app.use(express.static('public'));

// https://localhost:3000
https.createServer(options, app).listen(3000, function(){
	console.log('Server Started');
});