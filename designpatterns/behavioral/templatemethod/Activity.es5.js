"use strict";

/**
 * Template Method
 *
 * Based on Android's Activity lifecycle management.
 *
 * @link https://developers.android.com/reference/android/app/Activity.html
 * @constructor
 */
function Activity() {
}

Activity.prototype.start = function() {
    this.onCreate(new Object());
    this.onStart(new Object());
    this.onResume(new Object());
};

Activity.prototype.restart = function() {
    this.onRestart(new Object());
    this.onStart(new Object());
    this.onResume(new Object());
};

Activity.prototype.pause = function() {
    this.onPause(new Object());
};

Activity.prototype.stop = function() {
    this.onStop()
};

Activity.prototype.destroy = function() {
    this.onDestroy();
};

Activity.prototype.onCreate = function(savedInstanceState) {
    // some initialization logic
    console.log("Activity::onCreate");
};

Activity.prototype.onStart = function(bundle) {
    // some logic on starting
    console.log("Activity::onStart");
};

Activity.prototype.onResume = function(bundle) {
    // some logic on restarting the activity
    console.log("Activity::onResume");
};

// Activity is running...

Activity.prototype.onPause = function(bundle) {
    // some logic on pausing activity
};

Activity.prototype.onRestart = function(savedInstanceState) {
    // some logic on restarting the activity
};

Activity.prototype.onStop = function(bundle) {
    // some logic on stop
};

Activity.prototype.onDestroy = function() {
    // some logic on destroying the activity ~destructor
};

module.exports = Activity;
