"use strict";
var buster = require("buster"),
    assert = buster.assert;
var nodestat = require('../src/nodestat.js');

buster.testCase("nodestat", {
    "nodestat.stat()": function() {
        assert(nodestat.stat());
        setTimeout(function() {nodestat}, 60000);
    },


});
