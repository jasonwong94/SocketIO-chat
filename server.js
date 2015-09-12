var app = require( 'express' )();
var http = require( 'http').Server( app );

var PORT_NUMBER = 4400;

app.get('/', function(req, res){
	res.sendFile( __dirname + '/sample.html');
});

http.listen( PORT_NUMBER, function(){
	console.log( 'server running on port ', PORT_NUMBER );
});