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
    },
    "subset()": function() {
        var set = new Set({
            "count-1": 1,
            "count-2": 2,
            "irrelevant": 3
        });

        assert.equals(
            set.subset(/^count-/).toHash(),
            {"count-1": 1, "count-2": 2},
            "Subset contains only keys matching ^count-"
        );
    },
    "toString()": function() {
        var set = new Set({"a": 1});
        assert.equals(set.toString(), "Set of 1 items");
    }
});
