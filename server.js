// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var morgan = require('morgan');
var errorhandler = require('errorhandler')
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app      = express();
var port     = process.env.PORT || 3000;

// set up our express application

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

//angularjs
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));



//setting up the routes
require('./app/routes.js')(app);
//development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}
// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
