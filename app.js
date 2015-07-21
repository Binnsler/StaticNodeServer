// Including the File System core module
var fs = require('fs');

var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

// App starts
var app = express();

// Views are in our jade directory
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Serve the indexController variable (which is a function in index.js)
// app.get('/', indexController.index);


// Passing in req and res so we can set what the response will be
// app.get('/', function(req, res){

// 1) Synchronous(blocking) //
// Reading contents of data.txt
// var fileContents = fs.readFileSync('data.txt');

// // Adding the HTTP response header specifying content
// res.header('Content-Type', 'text/html');

// // Sending fileContents back to the User

// res.send(fileContents);


// 2) Asynchronous
// 
// fs.readFile('data.txt', function(err,data){ 
// 	res.header('Content-Type', 'text/html');
// 	res.send(data);
// })

// })

// Request file by name (This is totally wrong)
app.get('/:filename'), function(req, res){

	var theFile = req.params.filename;

	var fileContents = fs.readFileSync(theFile);

	res.send(fileContents);


};

var server = app.listen(6467, function() {
	console.log('Express server listening on port ' + server.address().port);
	console.log('Saved within the file structure.')
});
