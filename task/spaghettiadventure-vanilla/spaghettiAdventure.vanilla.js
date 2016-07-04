"use strict";

/**
 * Game of 4-Rooms
 * Enter to Heaven or rest in peace forever in a Cemetery if you fail.
 */

var rl = require("readline"),
    io = rl.createInterface({
        "input": process.stdin,
        "output": process.stdout
    });

function SpaghettiAdventure(){

	this.rooms = [];
	this.history = [];
	this.currentRoom = {};
	this.state = {
		answer: null
	};
};

SpaghettiAdventure.prototype.load = function load(rooms, firstRoom){
	this.rooms = rooms;
	this.next(firstRoom);
};

SpaghettiAdventure.prototype.next = function next(roomId){
	// needs to be validated:
	this.currentRoom = this.getRoom(roomId)[0];

	// fixme: room.question should be state-dependent :/
	this.ask(this.currentRoom.question, function(answer){
		this.assertAnswer(answer);
	}.bind(this));
};

SpaghettiAdventure.prototype.getRoom = function getRoom(roomId){
	return this.rooms.filter(function(room){
		return room.id === roomId;
	});
};

SpaghettiAdventure.prototype.ask = function ask(question, callback){
	return io.question(question, callback);
};

SpaghettiAdventure.prototype.log = function log(){
	this.history.push(this.state);
};

// state mutators: 

SpaghettiAdventure.prototype.assertAnswer = function assertAnswer(answer){
	if(answer === 'yes'){
		this.state.answer = true;
	} else if(answer === 'no'){
		this.state.answer = false;
	} else {
		// throw new error
	};
};

module.exports = SpaghettiAdventure;