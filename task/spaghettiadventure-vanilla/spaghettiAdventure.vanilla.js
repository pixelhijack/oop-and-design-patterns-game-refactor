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
    
var _ = require("../../node_modules/underscore/underscore-min");

function SpaghettiAdventure(){

	this.rooms = [];
	this.history = [];
	this.currentRoom = {};
	this.state = {
		answer: null, 
		weapon: false, 
		text: '', 
		next: '', 
		type: null
	};
}

SpaghettiAdventure.prototype.load = function load(rooms, firstRoom){
	this.rooms = rooms;
	this.next(firstRoom);
};

SpaghettiAdventure.prototype.next = function next(roomId){
	// 1. get room
	this.currentRoom = this.getRoom(roomId);

  // 2. set ENTER state => room question based on prev state
  this.setState({ type: 'ENTER' });
  this.setState(this.actionByState(this.currentRoom.question));
  this.log();
  
	this.ask(this.state.text, function(answer){
		// 3. set EXIT state => answer state based on input, update weapon state based on anser
		var nextState;
		
		this.setState(this.inputToState(answer));
		nextState = this.actionByState(this.currentRoom.answers);
		this.setState(nextState);
		this.setState({ type: 'EXIT' });
		if(nextState.text){
      this.write(this.state.text);
		}
		this.log();
		
		// 4. enter next room if given
		this.currentRoom.answers.length ? this.next(this.state.next) : this.end();
	}.bind(this));
};

SpaghettiAdventure.prototype.getRoom = function getRoom(roomId){
	var room = this.rooms.filter(function(room){
		return room.id === roomId;
	});
	// validate...
	return room[0];
};

SpaghettiAdventure.prototype.ask = function ask(question, callback){
	return io.question(question, callback);
};

SpaghettiAdventure.prototype.write = function write(text){
	return io.write(text);
};

SpaghettiAdventure.prototype.end = function end(){
	return io.close();
};

SpaghettiAdventure.prototype.log = function log(){
	//console.log('on: %s\n', this.state.type, this.state);
	this.history.push(this.state);
};

SpaghettiAdventure.prototype.inputToState = function inputToState(answer){
	if(answer === 'yes'){
		return {
      answer: true
		};
	} else if(answer === 'no'){
		return {
      answer: false
		};
	} else {
		// throw new error
	}
};

SpaghettiAdventure.prototype.assertState = function assertState(condition){
	return _.isMatch(this.state, condition);
};

SpaghettiAdventure.prototype.setState = function setState(newState){
	_.extend(this.state, newState);
};

SpaghettiAdventure.prototype.actionByState = function actionByState(actionAndStates){
	var _actionAndState = actionAndStates.filter(function(actionAndState){
    return this.assertState(actionAndState.state);
	}.bind(this));
	return (_actionAndState[0] && _actionAndState[0].action) || {};
};

module.exports = SpaghettiAdventure;