"use strict";

var Activity = require("./Activity.es5");

function MainActivity() {

    Activity.call(this);

    function doSomething(event) {
        console.log(event);
        // ...
    }

    this.notify = function(event) {
        // do something with the event
        doSomething(event);
    };

    this.onCreate = function(savedInstanceState) {
        Activity.prototype.onCreate.call(this, savedInstanceState);
        // do some more initialization
        console.log("MainActivity::onCreate");
    };

    this.onResume = function(bundle) {
        Activity.prototype.onResume.call(this, bundle);
        // do some more just after app is visible
        console.log("MainActivity::onResume");
    };

    // ...
}

MainActivity.prototype = new Activity();
MainActivity.prototype.constructor = MainActivity;

module.exports = MainActivity;
