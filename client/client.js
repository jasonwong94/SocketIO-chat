var io = require( 'socket.io-client');
var socket = io();
var angular = require( 'angular' );

var app = angular.module( 'chat', [] );
app.controller( 'clientController', clientController );

function clientController(){
	var vm = this;
	vm.Username = "";
	vm.FormComplete = false;

	vm.send = send;
	vm.setComplete = setComplete;

	function send(){
		console.log( vm.chat );
		socket.emit( 'message', vm.chat );

		//reset
		vm.chat = undefined;

		//prevent button from refreshing page
		return false;
	};

	function setComplete(){
		vm.FormComplete = true;
		console.log( vm.Username );
	}

	//listen for any incoming messages
	socket.on('server', function( msg ){
		console.info( 'received from server: '+ msg );
	});
};