"use strict";

var SayHello = require("./SayHello.es5"),
    MODULE_NAME = "DependencyA";

function DependencyA() {

    SayHello.call(this);

    this.getModuleName = function() {
        return MODULE_NAME;
    };
}

DependencyA.prototype = new SayHello();
DependencyA.prototype.constructor = DependencyA;

module.exports = DependencyA;
