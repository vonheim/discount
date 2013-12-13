"use strict";


var Widget = require('./widget.js'),
    _      = require('underscore'),
    util   = require('util');


function PieChart(args) {
    _.defaults(this, {type: 'piechart'}, args||{});
}


util.inherits(PieChart, Widget);

module.exports = PieChart;

