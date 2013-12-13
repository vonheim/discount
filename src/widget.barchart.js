"use strict";


var Widget = require('./widget.js'),
    util   = require('util');


function BarChart(args) {
    args = args || {};
    this.name = args.name;
    this.type = 'barchart';
}


util.inherits(BarChart, Widget);

module.exports = BarChart;

