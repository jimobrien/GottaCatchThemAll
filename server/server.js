/*****************
 * Basic Server
 * Implemented with Express - http://expressjs.com/4x/api.html
 ****************/
var router = require('./router.js');
var express = require('express');
var bodyParser = require('body-parser'); // to get data from POST: https://github.com/expressjs/body-parser

var app = express();
var localPort = process.env.PORT || 3003; // hard-coded port

/***********
 * Headers
 ***********/
app.all('*', function(req, res, next) { // headers for server
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

/*****************
 * NOTE: This code block included for review. I recommend we keep until we deploy, then
 * remove or un-comment as necessary.
       app.set('title', 'CatchEm'); // set site title in server.
       app.get('title');
 ****************/
  
/*****************
 * NOTE: This code block included for later implementation.
 * Use bodyParser to parse application/json as follows:
       app.use(bodyParser.urlencoded({ extended: true }));
       app.use(bodyParser.json()) 
 ****************/

app.listen(localPort); // Start the serverconsole.log('Magic happens on port ' + port);
console.log('Listening on port ' + localPort); // Log to console on successful start