"use strict";

var BadEncapsulation,
    GoodEncapsulation,
    Tracking,
    Content;

// BAD:
BadEncapsulation = {
    "trackEvent": function() { },
    "stripTags": function() { },
    "getDescription": function() {
        return this.stripTags();
    },
    "getTitle": function() {
        return this.stripTags();
    }
};

// GOOD:
Tracking = function() {

    this.trackEvent = function() {
        // ...
    };
};

Content = function() {

    function stripTags() {
        // ...
    }

    this.getTitle = function() {
        return stripTags();
    };

    this.getDescription = function() {
        return stripTags();
    };
};

GoodEncapsulation = function() {// Note: it is a Facade

    var tracking = new Tracking(),
        content = new Content();

    this.trackEvent = function() {
        tracking.trackEvent();
    };

    this.getTitle = function() {
        return content.getTitle();
    };

    this.getDescription = function() {
        return content.getDescription();
    };
};

module.exports = {
    "BadEncapsulation": BadEncapsulation,
    "GoodEncapsulation": GoodEncapsulation
};
