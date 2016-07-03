"use strict";

/**
 * The Nuclear Bomb
 * Never Ever!
 * Very BAD
 */

var lodash = require("lodash"),
    VALIDATION_ERROR_MESSAGE = "The validation error message.",
    name,
    text,
    Builder;

function validateBuildPreconditions() {
    if (lodash.isString(name) && lodash.isString(text)) {
        return true;
    }
    return false;
}

Builder = {
    "withName": function(theName) {
        name = theName;
        return this;
    },
    "withText": function(theText) {
        text = theText;
        return this;
    },
    "build": function() {
        if (!validateBuildPreconditions()) {
            throw new Error(VALIDATION_ERROR_MESSAGE);
        }
        return new Object({"name": name, "text": text});
    }
};

module.exports = Builder;
