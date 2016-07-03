"use strict";

var DependencyA = require("../factory/DependencyA.es5"),
    DependencyB = require("../factory/DependencyB.es5"),
    DependencyC = require("../factory/DependencyC.es5"),
    HELLO_MESSAGE_PREFIX = "Hellos by my dependencies: ",
    MEMBER_MESSAGE_SEPARATOR = "\n";

function Complex(dependencyA, dependencyB, dependencyC) {

    this.helloMembers = function() {
        var helloMembersMessage = new String().concat(
            HELLO_MESSAGE_PREFIX,
            MEMBER_MESSAGE_SEPARATOR,
            dependencyA.sayHello(),
            MEMBER_MESSAGE_SEPARATOR,
            dependencyB.sayHello(),
            MEMBER_MESSAGE_SEPARATOR,
            dependencyC.sayHello()
        );

        return helloMembersMessage;
    };
}

Complex.createComplex = function() {
    return new Complex(
        new DependencyA(),
        new DependencyB(),
        new DependencyC()
    );
};

module.exports = Complex;
