"use strict";
var buster = require("buster"),
    assert = buster.assert;
var nodestat = require('../src/nodestat.js');

buster.testCase("nodestat", {
    "nodestat.stat()": function() {

        nodestat.stat().add("fisk", 2);
        nodestat.stat().add("hest", 3);

        nodestat.widgets = [
            new nodestat.widget.BarChart({name:"Hester"}),
            new nodestat.widget.PieChart({name:"Hester"}),
            new nodestat.widget.List({name:"Hester"}),
        ];
        assert(nodestat.stat());
        setTimeout(function() {nodestat}, 60000);
    },


});
