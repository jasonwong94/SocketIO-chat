var app = require( 'express' )();
var http = require( 'http').Server( app );
var io= require( 'socket.io')(http);

var PORT_NUMBER = 4400;

app.get('/', function(req, res){
	res.sendFile( __dirname + '/sample.html');
});

io.on( 'connection', function(socket){
	console.log('a user connected');
});

http.listen( PORT_NUMBER, function(){
	console.log( 'server running on port ', PORT_NUMBER );
});