"use strict";

/**
 * Facade
 *
 * BAD:
 * when logic pollutes architectural component
 *
 * GOOD:
 * logic is extracted
 *
 * var someFacade = new SomeFacade(),
 *     something;
 *
 * someFacade.doSomething();
 *
 * something = someFacade.getSomething();
 */

var DependencyA = function() { },
    DependencyB = function() { },
    DependencyC = function() { },
    SomeFacade;

SomeFacade = function() {

    var deppendencyA = new DependencyA(),
        deppendencyB = new DependencyB(),
        deppendencyC = new DependencyC();

    function combine(argumentA, argumentB) {
        var combined;
        // do something
        return combined;
    }

    this.doSomething = function() {
        deppendencyA.doSomething();
        deppendencyC.doSomethingWith(
            deppendencyB.getSomething()
        );
    };

    this.getSomething = function() {
        var somethingA = deppendencyA.getSomething(),
            somethingB = deppendencyB.getSomething();

        return combine(somethingA, somethingB)
    };

    // ...
};

module.exports = SomeFacade;
