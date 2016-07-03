"use strict";

/**
 * Factory
 *
 * BAD:
 * import dependencies each time a new complex is required
 *
 * GOOD:
 * create instances by factory, depend on factory only
 */

var complexFactory = require("./complexFactory.es5"),
    complex = complexFactory.create();

console.log(complex.helloMembers());
