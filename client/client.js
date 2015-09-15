var io = require( 'socket.io-client');
var socket = io();
var angular = require( 'angular' );

var app = angular.module( 'chat', [] );
app.controller( 'clientController', clientController );

function clientController(){
	var vm = this;

	vm.send = send;
	function send(){
		console.log( vm.chat );
		socket.emit( 'message', vm.chat );

		//prevent button from refreshing page
		return false;
	};

	socket.on('server', function( msg ){
		console.info( 'received from server: '+ msg );
	});
};