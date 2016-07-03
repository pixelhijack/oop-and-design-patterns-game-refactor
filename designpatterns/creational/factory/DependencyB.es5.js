"use strict";

var SayHello = require("./SayHello.es5"),
    MODULE_NAME = "DependencyB";

function DependencyB() {

    SayHello.call(this);

    this.getModuleName = function() {
        return MODULE_NAME;
    };
}

DependencyB.prototype = new SayHello();
DependencyB.prototype.constructor = DependencyB;

module.exports = DependencyB;
