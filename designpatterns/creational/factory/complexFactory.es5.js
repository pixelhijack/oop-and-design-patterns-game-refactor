"use strict";

var DependencyA = require("./DependencyA.es5"),
    DependencyB = require("./DependencyB.es5"),
    DependencyC = require("./DependencyC.es5"),
    Complex = require("./Complex.es5");

function createComplex() {

    return new Complex(
        new DependencyA(),
        new DependencyB(),
        new DependencyC()
    );
}

module.exports = {
    "create": createComplex
};
