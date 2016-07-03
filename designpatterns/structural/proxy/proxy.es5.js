"use strict";

/**
 * Proxy
 */

var Complex,
    ComplexProxy;

Complex = function() {

    this.doSomething = function() {
        // does something
    };

    this.getSomething = function() {
        return "something";
    };
};

ComplexProxy = function() {

    var complex = new Complex();

    this.doSomething = function() {
        // some logic
        complex.doSomething();
        // some logic
    };

    this.getSomething = function() {
        var something;
        // some logic
        something = complex.getSomething();
        // do something with "something"
        return something;
    };
};

module.exports = ComplexProxy;
