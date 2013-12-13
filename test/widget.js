"use strict";
var buster   = require("buster"),
    assert   = buster.assert,
    Widget   = require('../src/widget.js'),
    List     = require('../src/widget.list.js'),
    PieChart = require('../src/widget.piechart.js'),
    Set      = require('../src/set.js');


buster.testCase("Widget", {
    "Load widget template": function() {
        var widget = new Widget();
        widget.type = 'test';
        assert.equals(widget.render({}), 'FISH');
    },
    "widget.List": function() {
        var widget = new List();
        widget.type = 'test';
        assert.equals(widget.render({}), 'FISH');
    },
    "widget.List.process()": function() {
        var widget = new List();
        var html = widget.process(new Set({"cat":"CAT", "dog":"DOG"}));
        assert(html.match(/cat[\s\S]+CAT[\s\S]+dog[\s\S]+DOG/));
    },
    "widget.PieChart": function() {
        var widget = new PieChart();
        widget.type = 'test';
        assert.equals(widget.render({}), 'FISH');
    }
});
