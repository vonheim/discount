"use strict";
var buster = require("buster"),
    assert = buster.assert;
var nodestat = require('../src/nodestat.js');

buster.testCase("nodestat", {
    "nodestat.stat()": function() {

        nodestat.stat().add("count-1", 2);
        nodestat.stat().add("count-2", 3);
        nodestat.stat().add("count-4", 3);
        nodestat.stat().add("total", 13);
        nodestat.stat().add("category-1", 4);
        nodestat.stat().add("category-2", 13);
        nodestat.stat().add("category-3", 8);
        
        nodestat.widgets = [
            new nodestat.widget.BarChart({name:"Bar chart", match:/^count/}),
            new nodestat.widget.PieChart({name:"Pie chart", match:/^category/}),
            new nodestat.widget.List({name:"All"}),
        ];
        assert(nodestat.stat());
        setTimeout(function() {nodestat}, 60000);
    },
});
