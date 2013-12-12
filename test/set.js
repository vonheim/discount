"use strict";
var buster = require("buster"),
    assert = buster.assert;
var Set = require('../src/set.js');

buster.testCase("Set", {
    "Can create": function() {
        var set = new Set();
        assert(set);
    },
    "size()": function() {
        var set = new Set({"a":1, "b":2});
        assert.equals(set.size(), 2);
    },
    "toHash()": function() {
        var hash = {"a":1, "b":2};
        var set = new Set(hash);
        assert.equals(set.toHash(), hash);
    }
});
