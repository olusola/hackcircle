var	express = require('express');
var	app = express();
var	path = require('path');
var 	bodyParser = require('body-parser'); // get body-parser
var 	morgan = require('morgan'); // used to see requests
var	cookieParser = require('cookie-parser');
var	methodOverride		= require('method-override');

var port = process.env.PORT || 8080;




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
app.use(cookieParser());
app.use(methodOverride());		// simulate DELETE and PUT


// ROUTES

// set up our one route to the index.html file
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});







// PORT

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});