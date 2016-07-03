"use strict";

/**
 * Factory Method (alternative version)
 *
 * BAD:
 * import dependencies each time a new complex is required
 *
 * GOOD:
 * create instances by factory method, depend on complex and eliminate unnecessary imports
 *
 * var Complex = require("Complex"),
 *     complex = Complex.createComplex();
 */

var Complex = require("./Complex.es5"),
    complex = Complex.createComplex();

console.log(complex.helloMembers());
