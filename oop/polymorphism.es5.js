"use strict";

var lodash = require("lodash"),
    Polymorph,
    SimplePolymorph;

Polymorph = function(someParameter) {

    // some design
};

Polymorph.prototype.doSomething = function() {
    // does something
};

SimplePolymorph = function(someParameter) {

    Polymorph.call(this, someParameter);

    this.doSomething = function() {
        Polymorph.prototype.doSomething.call(this);
        // and I do something
    };
};

SimplePolymorph.prototype = new Polymorph();
SimplePolymorph.prototype.constructor = SimplePolymorph;

module.exports = SimplePolymorph;