"use strict";
var buster = require("buster"),
    assert = buster.assert;
var Set = require('../src/set.js');

buster.testCase("Set", {
    "Can create": function() {
        var set = new Set();
        assert(set);
    }
});
