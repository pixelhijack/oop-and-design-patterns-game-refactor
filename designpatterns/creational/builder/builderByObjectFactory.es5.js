"use strict";

var lodash = require("lodash");

function createBuilder() {

    var VALIDATION_ERROR_MESSAGE = "The validation error message.",
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

    return Builder;
}

module.exports = {
    "create": createBuilder
};
