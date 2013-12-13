"use strict";
var buster = require("buster"),
    assert = buster.assert;
var nodestat = require('../src/nodestat.js');

buster.testCase("nodestat", {
    "nodestat.stat()": function() {

        nodestat.stat().add("fisk", 2);

        nodestat.widgets = [new nodestat.widget.PieChart({})];
        assert(nodestat.stat());
        setTimeout(function() {nodestat}, 60000);
    },


});
