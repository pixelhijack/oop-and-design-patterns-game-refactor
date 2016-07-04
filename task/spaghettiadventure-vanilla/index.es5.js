"use strict";

var SpaghettiAdventure = require("./spaghettiAdventure.vanilla");
var fs = require('fs');

var rooms = JSON.parse(fs.readFileSync('./rooms.json', 'utf8'));
var game = new SpaghettiAdventure();

game.load(rooms, 'inTheHallOfFame');
