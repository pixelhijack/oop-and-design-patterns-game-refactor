"use strict";

var lodash = require("lodash");

function BuilderByConstructor() {

    var VALIDATION_ERROR_MESSAGE = "The validation error message.",
        name,
        text;

    function validateBuildPreconditions() {
        if (lodash.isString(name) && lodash.isString(text)) {
            return true;
        }
        return false;
    }

    this.withName = function(theName) {
        name = theName;
        return this;
    };

    this.withText = function(theText) {
        text = theText;
        return this;
    };

    this.build = function() {
        if (!validateBuildPreconditions()) {
            throw new Error(VALIDATION_ERROR_MESSAGE);
        }
        return new Object({"name": name, "text": text});
    };
}

module.exports = BuilderByConstructor;
