var express = require( 'express');
var app = express();
var http = require( 'http').Server( app );
var io= require( 'socket.io')(http);
var path = require( 'path' );

var PORT_NUMBER = 4400;
var pwd= __dirname + './../client';


app.use( express.static( '../client'), function( req, res, next){
	res.sendFile( path.normalize( __dirname + './../client/sample.html'));
	// console.log( 'accessing ' + req.originalUrl );
} );

io.on( 'connection', function(socket){
	console.log('a user connected');
});

http.listen( PORT_NUMBER, function(){
	console.log( 'server running on port ', PORT_NUMBER );
});