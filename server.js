var	express = require('express');
var	app = express();
var	path = require('path');
var 	bodyParser = require('body-parser'); // get body-parser
var 	morgan = require('morgan'); // used to see requests



// set the public folder to serve public assets
app.use(express.static(__dirname + "/public"));


// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
 	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
 next();
 });


//  log all requests to the console
app.use(morgan('dev'));



// ROUTES

// set up our one route to the index.html file
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});







// PORT

var server = app.listen(8080
, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});