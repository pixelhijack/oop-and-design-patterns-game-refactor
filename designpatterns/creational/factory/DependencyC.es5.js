"use strict";

var SayHello = require("./SayHello.es5"),
    MODULE_NAME = "DependencyC";

function DependencyC() {

    SayHello.call(this);

    this.getModuleName = function() {
        return MODULE_NAME;
    };
}

DependencyC.prototype = new SayHello();
DependencyC.prototype.constructor = DependencyC;

module.exports = DependencyC;
