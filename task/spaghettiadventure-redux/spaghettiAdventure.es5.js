"use strict";

/**
 * Game of 4-Rooms
 * Enter to Heaven or rest in peace forever in a Cemetery if you fail.
 */

var rl = require("readline"),
    io = rl.createInterface({
        "input": process.stdin,
        "output": process.stdout
    }),
    spaghettiAdventure;

spaghettiAdventure = {

    "ERROR_MESSAGE": "\nWRONG USAGE: just 'yes' or 'no' as answer only please.\n",
    "YES": "yes",
    "NO": "no",
    "hasWeapon": false,

    "inTheHallOfFate": function() {
        io.question("\nYou've just arrived to the Hall of Fate and a mid-age man asks you.\n" +
            "Do you belive in the Many-Face God?\n", function(answer) {
            if(answer === this.YES) {
                this.next("inTheHeaven");
            } else if(answer === this.NO) {
                io.write("Damn wanderer you are lost without real fate, you don't deserve to live.\n");
                this.next(null);
            } else {
                io.write(this.ERROR_MESSAGE);
                this.next("inTheHallOfFate")
            }
        }.bind(this));
    },

    "inTheLandlordsSecretChamber": function() {
        if (this.hasWeapon) {
            io.question("\nYou've just entered the Landlord's Secret Chamber and you see him standing against you.\n" +
                "Do you attack him immediately without waiting for his first reaction?\n", function(answer) {
                if (answer === this.YES) {
                    io.write("Landlord is defeated.\n");
                    this.next("inTheHallOfFate");
                } else if(answer === this.NO) {
                    io.write("The Landlord is a damn man and attacked you immediately. You need to run...\n");
                    this.next("inTheThroatOfTheGreatLion");
                } else {
                    io.write(this.ERROR_MESSAGE);
                    this.next("inTheLandlordsSecretChamber");
                }
            }.bind(this));
        } else {
            io.write("\nYou've just entered the Landlord's Secret Chamber without a weapon.\n" +
                "Seriously, you foolish... Cannot fight against the Landlord without a weapon.\n");
            this.next(null);
        }
    },

    "inTheThroatOfTheGreatLion": function() {
        io.question("\nYou've just entered to the room of the Great Lion and it sees you" +
            (this.hasWeapon ? " have a weapon so starts to attack you to save its own life.\n" +
            "Do you drop your weapon down immediately?\n" : " doesn't have a weapon so it starts to " +
            "approach you smoothly.\nDo you pet the Great Lion?\n"), function(answer) {
            if (answer === this.YES) {
                if (this.hasWeapon) {
                    io.write("The Great Lion let you take your weapon back and pass through.\n");
                    this.next("inTheLandlordsSecretChamber");
                } else {
                    this.hasWeapon = true;
                    io.write("The Great Lion gave you a weapon for such kindness.\n");
                    this.next("inTheLandlordsSecretChamber");
                }
            } else if (answer === this.NO) {
                if (this.hasWeapon) {
                    io.write("You poor... What did you think? You cannot defeat the Great Lion.\n");
                    this.next(null);
                } else {
                    io.write("The Great Lion is said but let you to pass through.\n");
                    this.next("inTheLandlordsSecretChamber");
                }
            } else {
                io.write(this.ERROR_MESSAGE);
                this.next("inTheThroatOfTheGreatLion")
            }
        }.bind(this));
    },

    "inTheHallOfFame": function() {
        io.question("\nYou've just entered to the hall of fame where you see many heros and their weapons.\n" +
            "A door opens immediately in front of you and after a while the walls starts to move.\n" +
            "Do you try to get a weapon (sword) before running through the door?\n", function(answer) {
            if (answer === this.YES || answer === this.NO) {
                if (answer === this.YES) {
                    this.hasWeapon = true;
                }
                this.next("inTheThroatOfTheGreatLion");
            } else {
                io.write(this.ERROR_MESSAGE);
                this.next("inTheHallOfFame");
            }
        }.bind(this));
    },

    "inTheCemetery": function() {
        io.write("\nYou are dead forever, 6 feet under.\nYou failed.\nEND.");
        io.close();
    },

    "inTheHeaven": function() {
        io.write("\nYou reached the Heaven with fate and pride.\nCongratulation!\nEND.");
        io.close();
    },

    /**
     * Change scene
     */
    "next": function(where) {
        if (typeof where === "undefined") {
            this.inTheHallOfFame();
        } else if (where === null) {
            this.inTheCemetery();
        } else {
            this[where]();
        }
    },

    /**
     * Entry point of the game.
     */
    "start": function() {
        this.next();
    }
};

module.exports = spaghettiAdventure;
