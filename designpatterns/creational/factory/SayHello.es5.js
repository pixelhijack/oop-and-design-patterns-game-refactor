"use strict";

var NAME_PLACEHOLDER = "%name",
    HELLO_MESSAGE = "Hello from ".concat(NAME_PLACEHOLDER),
    MODULE_NAME = "SayHello";

function SayHello() {

    this.getModuleName = function() {
        return MODULE_NAME;
    };

    this.sayHello = function() {
        return HELLO_MESSAGE.replace(NAME_PLACEHOLDER, this.getModuleName());
    };
}

module.exports = SayHello;
