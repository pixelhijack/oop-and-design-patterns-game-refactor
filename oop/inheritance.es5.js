"use strict";

var lodash = require("lodash"),
    BadCar, BadAudi, BadOpel,
    GoodCar, GoodAudi, GoodOpel;

// BAD
BadCar = {
    "DEFAULT_VELOCITY": 0,// car is stopped
    "velocity": this.DEFAULT_VELOCITY,
    "acceleration": 1,// m/s^2
    "deceleration": 1,// m/s^2
    "gasPaddlePressedByPercentageForOneSecond": function(percentage) {
        var increasedVelocity = this.velocity + percentage * this.acceleration;

        this.velocity = increasedVelocity;
    },
    "breakPaddlePressedByPercentageForOneSecond": function(percentage) {
        var decreasedVelocity = this.velocity - percentage * this.deceleration;

        this.velocity = decreasedVelocity < 0 ? this.DEFAULT_VELOCITY : decreasedVelocity;
    }
};

BadAudi = lodash.extend(BadCar, {
    "acceleration": 12,
    "deceleration": 11
});

BadOpel = lodash.extend(BadCar, {
    "acceleration": 9,
    "deceleration": 10
});

// GOOD
GoodCar = function(theAcceleration, theDeceleration) {

    var velocity = this.DEFAULT_VELOCITY,
        acceleration = theAcceleration || this.DEFAULT_ACCELERATION,
        deceleration = theDeceleration || this.DEFAULT_DECELERATION;

    function convertPercentageToRealValue(percentage) {
        return percentage / 100;
    }

    this.getVelocity = function() {
        return velocity;
    };

    this.gasPaddlePressedByPercentageForOneSecond = function(percentage) {
        var increasedVelocity = velocity + convertPercentageToRealValue(percentage) * acceleration;

        velocity = increasedVelocity;
    };

    this.breakPaddlePressedByPercentageForOneSecond = function(percentage) {
        var decreasedVelocity = velocity - convertPercentageToRealValue(percentage) * deceleration;

        velocity = decreasedVelocity < 0 ? this.DEFAULT_VELOCITY : decreasedVelocity;
    };
};

// Why could it be public?
GoodCar.prototype.DEFAULT_VELOCITY = 0;// m/s, car is stopped
GoodCar.prototype.DEFAULT_ACCELERATION = 1;// m/s^2
GoodCar.prototype.DEFAULT_DECELERATION = 1;// m/s^2

GoodAudi = function(acceleration, deceleration) {

    GoodCar.call(this, acceleration, deceleration);
};

GoodAudi.prototype = new GoodCar();
GoodAudi.prototype.constructor = GoodAudi;

GoodOpel = function(acceleration, deceleration) {

    GoodCar.call(this, acceleration, deceleration);
};

GoodOpel.prototype = new GoodCar();
GoodOpel.prototype.constructor = GoodOpel;

module.exports = {
    "BadAudi": BadAudi,
    "BadOpel": BadOpel,
    "GoodAudi": GoodAudi,
    "GoodOpel": GoodOpel
};
