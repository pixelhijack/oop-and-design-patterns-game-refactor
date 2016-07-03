"use strict";

var MainActivity = require("./MainActivity.es5"),
    mainActivity = new MainActivity();

mainActivity.start();
mainActivity.notify({"change": 1});
