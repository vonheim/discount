"use strict";


var Widget = require('./widget.js'),
    _      = require('underscore'),
    util   = require('util');


function BarChart(args) {
    _.defaults(this, {type: 'barchart'}, args||{});
}


util.inherits(BarChart, Widget);

module.exports = BarChart;

