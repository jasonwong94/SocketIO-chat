var express = require( 'express');
var app = express();
var http = require( 'http').Server( app );
var io= require( 'socket.io')(http);
var path = require( 'path' );

var PORT_NUMBER = 4400;
var pwd= __dirname + './../client';


app.use( express.static( '../client'), function( req, res, next){
	res.sendFile( path.normalize( __dirname + './../client/sample.html'));
} );

io.on( 'connection', function(socket){
	console.log('a user connected');

	socket.on( 'message', function( msg ){
		console.log( 'new message received: '+ msg);
		socket.broadcast.emit( 'server', msg);
	})

	socket.on( 'disconnect', function(){
		console.log( 'user disconnected' );
	})
});

http.listen( PORT_NUMBER, function(){
	console.log( 'server running on port ', PORT_NUMBER );
});